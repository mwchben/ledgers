from flask import Flask,render_template,request, redirect, url_for, flash
from flask_login import LoginManager, login_user, logout_user, login_required,current_user
from werkzeug.utils import secure_filename
from extensions.extension import db

import os


app = Flask(__name__)

basedir = os.path.abspath(os.path.dirname(__file__))

app.config['SECRET_KEY'] = 'n7b4*(Y53b;a8>?vMOCVE8)'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///maggiore.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['UPLOAD_FOLDER'] = os.path.join(basedir, 'static', 'uploads')
#create uploads folder if not already there
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)


login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'

db.init_app(app)
from models.admin_model import Admin #prevent circular import
from models.user_model import User

#f() tells Flask-Login how to load admin user from the database by ID.
@login_manager.user_loader  
def load_user(user_id):
    print("fakm")
    return Admin.query.get(int(user_id))



# @app.route("/")
# def index():
#     return render_template('index.html', title='Welcome')

#......................................................................................................
@app.route("/dashboard")
@login_required
def dashboard() :
    return render_template('dashboard.html', title='Dashboard')

#......................................................................................................
@app.route("/login", methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('dashboard'))
    if request.method == 'POST': 
        username = request.form['username']
        password = request.form['password']

        admin = Admin.query.filter_by(username=username).first()
        if admin and admin.password == password:
                login_user(admin)
                flash('Logged in successfully!', 'success')
                return redirect(url_for('dashboard'))
        else:
            flash('Invalid username or password', 'danger')
    return render_template('login.html', title='login')
@app.route("/logout")
@login_required
def logout():
    logout_user()
    flash('You have been logged out.', 'info')
    return redirect(url_for('login'))

#......................................................................................................
@app.route('/add-user', methods=['GET', 'POST'])
def add_user():
    if request.method == 'POST':
        # Get form values
        name = request.form['name']
        email = request.form['email']
        password = request.form['password']
        
        # Handle file upload
        avatar_file = request.files.get('avatar')
        avatar_filename = None
        if avatar_file and avatar_file.filename != '':
            filename = secure_filename(avatar_file.filename)
            file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            avatar_file.save(file_path)
            avatar_filename = filename
        # Save to DB
        new_user = User(name=name, email=email, password=password, avatar=avatar_filename)
        db.session.add(new_user)
        db.session.commit()

        flash('User added successfully!', 'success')
        return redirect(url_for('dashboard'))
@app.route('/users')
def list_users():
    users = User.query.all()
    return render_template('users.html', users=users)
@app.route('/edit-user/<int:user_id>', methods=['GET', 'POST'])
def edit_user(user_id):
    user = User.query.get_or_404(user_id)
    if request.method == 'POST':
        user.name = request.form['name']
        user.email = request.form['email']
        db.session.commit()
        flash('User updated successfully', 'success')
        return redirect(url_for('list_users'))
    return render_template('edit_user.html', user=user)
@app.route('/delete-user/<int:user_id>', methods=['POST'])
def delete_user(user_id):
    user = User.query.get_or_404(user_id)
    db.session.delete(user)
    db.session.commit()
    flash('User deleted successfully', 'success')
    return redirect(url_for('list_users'))

#......................................................................................................
@app.errorhandler(404)
def page_not_found(error):
    return render_template('page_not_found.html',title='Ooops!'), 404

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)
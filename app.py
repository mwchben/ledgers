from flask import Flask,render_template,request, redirect, url_for, flash
from flask_login import LoginManager, login_user, logout_user, login_required,current_user
from extensions.extension import db


app = Flask(__name__)

app.config['SECRET_KEY'] = 'n7b4*(Y53b;a8>?vMOCVE8)'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///maggiore.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'

db.init_app(app)
from models.admin_model import Admin #prevent circular import

#f() tells Flask-Login how to load admin user from the database by ID.
@login_manager.user_loader  
def load_user(user_id):
    print("fakm")
    return Admin.query.get(int(user_id))



# @app.route("/")
# def index():
#     return render_template('index.html', title='Welcome')

@app.route("/dashboard")
@login_required
def dashboard() :
    return render_template('dashboard.html', title='Dashboard')

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


@app.errorhandler(404)
def page_not_found(error):
    return render_template('page_not_found.html',title='Ooops!'), 404

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('alt.html', title='Dashboard')

@app.route("/login")
def login():
    return render_template('login.html', title='login')

if __name__ == "__main__":
    app.run(debug=True)
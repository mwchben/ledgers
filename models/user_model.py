from flask_login import UserMixin
from werkzeug.security import generate_password_hash
from extensions.extension import db #Only one db instance should exist and be shared across my app and models.

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)
    avatar = db.Column(db.String(300), nullable=True)  # Store filename or path

    def __init__(self, name, email, password, avatar=None):
        self.name = name
        self.email = email
        self.password = generate_password_hash(password)
        self.avatar = avatar

    def __repr__(self):
        return f'<User {self.email}>'


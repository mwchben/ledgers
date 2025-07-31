from flask_login import UserMixin
from extensions.extension import db #Only one db instance should exist and be shared across my app and models.

class Admin(UserMixin,db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False) 

    def __init__(self, username, password):
        self.username = username
        self.password = password

    def __repr__(self):
        return f"<Admin(username='{self.username}')>"

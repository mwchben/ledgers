from app import app,db
from models.admin_model import Admin

with app.app_context():
    db.create_all()
    defaultAdmin = Admin(username="admin", password="qwerty123")
    db.session.add(defaultAdmin)
    db.session.commit()
    print("User created with id:", defaultAdmin.id)


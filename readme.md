## The ledger repo aims to achieve the following:

```plaintext
+-------------------+          HTTPS          +---------------------+
|                   | <------------------->  |                     |
|   Android App     |    (API Requests)      |   Flask Web Server  |
|  (Kotlin, XML/    |      (JSON)           |   (Python)          |
|  Jetpack Compose) |                       |                     |
+-------------------+                       +---------------------+
        |                                             |
        |                                             |
        |   1. User enters credentials                |
        |-------------------------------------------->|
        |   2. Flask authenticates (JWT/Session)      |
        |<--------------------------------------------|
        |   3. Receives token/session                 |
        |                                             |
        |   4. User fills input form                  |
        |-------------------------------------------->|
        |   5. Flask validates & stores data          |
        |<--------------------------------------------|
        |   6. Success/failure response               |
        |                                             |
        |                                             v
        |                                    +------------------+
        |                                    |                  |
        |                                    |   Database       |
        |                                    | (SQLAlchemy ORM, |
        |                                    |  e.g. PostgreSQL)|
        |                                    |                  |
        |                                    +------------------+
        |
+-------------------+ 
|                   | 
|    User Device    |
|                   |
+-------------------+ 
```

## Languages and frameworks I intend to use:
- **Frontend (Android App):**
  - Language: Kotlin
  - UI: Jetpack Compose or XML layouts
  - Networking: Retrofit/OkHttp for API calls
  - Auth: Store JWT securely (EncryptedSharedPreferences)

- **Backend (Web Server):**
  - Language: Python
  - Framework: Flask (with Flask-RESTful, Flask-JWT-Extended)
  - ORM: SQLAlchemy
  - Database: PostgreSQL (or SQLite for development)
  - Auth: JWT or session cookies
  - Input validation: Marshmallow

### **Architecture Flow Explained**

1. **User Authentication**
   - User opens the Kotlin Android app and enters login credentials.
   - App sends credentials via HTTPS POST to a Flask /login endpoint.
   - Flask validates credentials against the database and returns a JWT token or session cookie if successful.

2. **Input & Data Upload**
   - User fills out input fields in the Android app.
   - App sends the data (with authentication token/session) to the Flask backend via a POST request.
   - Flask validates, processes, and stores the data in the database using SQLAlchemy.

3. **Response**
   - Flask sends a JSON response (success/failure) to the Android app.
   - App updates the UI accordingly.


### **Security**
- All communication is over HTTPS.
- Authentication tokens stored securely on the device.
- Backend validates all inputs and authenticates requests.

---


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
        |   1. User enters credentials (coming soon)  |
        |-------------------------------------------->|
        |   2. Flask authenticates (JWT/Session)      |
        |        (coming soon)                        |
        |<--------------------------------------------|
        |   3. Receives token/session (coming soon)   |
        |                                             |
        |   4. User fills input form (Up && Running?) |
        |-------------------------------------------->|
        |   5. Flask validates & stores data          |
        |      (Up && Running?)                       |
        |<--------------------------------------------|
        |   6. Success/failure response               |
        |    (Up && Running?)                         |
        |                                             |
        |                                             |
        |                                    +------------------+
        |                                    |                  |
        |                                    |   Database       |
        |                                    | (SQLAlchemy)     |                                   
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
  - Language: Java
  - UI: XML layouts
  - ~Networking: Retrofit/OkHttp for API calls~
  - ~Auth: Store JWT securely (EncryptedSharedPreferences)~

- **Backend (Web Server):**
  - Language: Python
  - Framework: Flask
  - ORM: SQLAlchemy
  - Database: SQLite
  - ~Auth: JWT or session cookies~
  - ~Input validation: Marshmallow~

### **Architecture Flow Explained**

--- 
i. **Input & Data Upload**
   - User fills out input fields in the Android app.
   - App sends the data to the Flask backend via a POST request.
   - Flask validates, processes, and stores the data in the database using SQLAlchemy.
     
---
ii. **Response**
   - Flask sends a JSON response (success/failure) to the Android app.
   - App updates the UI accordingly.


---


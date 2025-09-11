package com.example.ledger

import android.content.Intent
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.example.ledger.network.ApiService

class LoginActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login)

        val usernameEdit = findViewById<EditText>(R.id.usernameEdit)
        val passwordEdit = findViewById<EditText>(R.id.passwordEdit)
        val loginButton = findViewById<Button>(R.id.loginButton)

        loginButton.setOnClickListener {
            val username = usernameEdit.text.toString()
            val password = passwordEdit.text.toString()

            if (username.isBlank() || password.isBlank()) {
                Toast.makeText(this, "Please enter both username and password", Toast.LENGTH_SHORT).show()
                return@setOnClickListener
            }

            ApiService.login(username, password) { success, token ->
                runOnUiThread {
                    if (success && token != null) {
                        getSharedPreferences("app_prefs", MODE_PRIVATE)
                            .edit().putString("token", token).apply()
                        startActivity(Intent(this, HomeActivity::class.java))
                        finish()
                    } else {
                        Toast.makeText(this, "Login failed. Check your credentials.", Toast.LENGTH_SHORT).show()
                    }
                }
            }
        }
    }
}
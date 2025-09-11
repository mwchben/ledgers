package com.example.ledger

import android.content.Intent
import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.example.ledger.network.ApiService

class HomeActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_home)

        val dataEdit = findViewById<EditText>(R.id.dataEdit)
        val submitButton = findViewById<Button>(R.id.submitButton)
        val logoutButton = findViewById<Button>(R.id.logoutButton)

        submitButton.setOnClickListener {
            val data = dataEdit.text.toString()
            if (data.isBlank()) {
                Toast.makeText(this, "Please enter some data", Toast.LENGTH_SHORT).show()
                return@setOnClickListener
            }

            val token = getSharedPreferences("app_prefs", MODE_PRIVATE)
                .getString("token", null) ?: ""

            ApiService.submitData(token, data) { success, response ->
                runOnUiThread {
                    if (success) {
                        Toast.makeText(this, "Data submitted successfully!", Toast.LENGTH_SHORT).show()
                    } else {
                        Toast.makeText(this, "Submit failed: $response", Toast.LENGTH_SHORT).show()
                    }
                }
            }
        }

        logoutButton.setOnClickListener {
            getSharedPreferences("app_prefs", MODE_PRIVATE).edit().clear().apply()
            startActivity(Intent(this, LoginActivity::class.java))
            finish()
        }
    }
}
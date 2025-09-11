package com.example.ledger.network

import okhttp3.*
import org.json.JSONObject
import java.io.IOException

object ApiService {
    private val client = OkHttpClient()
    private const val BASE_URL = "http://YOUR_FLASK_SERVER_IP:5000"

    fun login(username: String, password: String, callback: (Boolean, String?) -> Unit) {
        val json = JSONObject()
        json.put("username", username)
        json.put("password", password)
        val body = RequestBody.create("application/json; charset=utf-8".toMediaTypeOrNull(), json.toString())

        val request = Request.Builder()
            .url("$BASE_URL/login")
            .post(body)
            .build()

        client.newCall(request).enqueue(object : Callback {
            override fun onFailure(call: Call, e: IOException) = callback(false, null)
            override fun onResponse(call: Call, response: Response) {
                val responseStr = response.body?.string()
                if (response.isSuccessful && responseStr != null) {
                    val token = JSONObject(responseStr).optString("token")
                    callback(true, token)
                } else {
                    callback(false, null)
                }
            }
        })
    }

    fun submitData(token: String, data: String, callback: (Boolean, String?) -> Unit) {
        val json = JSONObject()
        json.put("data", data)
        val body = RequestBody.create("application/json; charset=utf-8".toMediaTypeOrNull(), json.toString())

        val request = Request.Builder()
            .url("$BASE_URL/submit_data")
            .addHeader("Authorization", "Bearer $token")
            .post(body)
            .build()

        client.newCall(request).enqueue(object : Callback {
            override fun onFailure(call: Call, e: IOException) = callback(false, e.message)
            override fun onResponse(call: Call, response: Response) {
                if (response.isSuccessful) {
                    callback(true, response.body?.string())
                } else {
                    callback(false, response.body?.string())
                }
            }
        })
    }
}
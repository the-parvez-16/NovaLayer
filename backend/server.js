// @ts-nocheck  // Tells IDE to skip type-checking this file
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc, serverTimestamp } = require('firebase/firestore');

const app = express();

// Middleware
app.use(cors({
    origin: [
      'https://novalayer.vercel.app',  // Replace with your Vercel URL
      'http://localhost:3000'                // For local testing
    ]
  }));
app.use(express.json());     // New (express has built-in body parsing)

// Firebase Config
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

// API Endpoint for Form Submission
app.post('/submit-form', async (req, res) => {
  try {
    const { usrname, email, service, message } = req.body;

    // Validation
    if (!email || !message) {
      return res.status(400).json({ error: "Email and message are required." });
    }

    await addDoc(collection(db, "messages"), {
      usrname,
      email,
      service,
      message,
      timestamp: serverTimestamp()
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message });
  }
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
# Wispr Flow Clone – Voice to Text Desktop App

A cross-platform voice-to-text desktop application built using **Tauri**, **React**, and **Deepgram**.  
This project focuses on implementing the core voice-to-text workflow similar to Wispr Flow, prioritizing functionality and clean architecture over UI styling.

---

## 🎯 Project Objective

The goal of this assignment is to demonstrate:
- Desktop application development using Tauri
- Microphone audio capture
- AI-powered speech-to-text integration
- Clean separation of concerns
- Practical problem-solving and integration skills

---

## 🛠 Tech Stack

- **Frontend**: React + Vite
- **Desktop Framework**: Tauri
- **Speech-to-Text**: Deepgram API (REST)
- **Language**: JavaScript
- **Platforms**: Windows / macOS / Linux

---

## ✨ Features Implemented

- Push-to-talk voice input
- Microphone permission handling
- Audio recording using MediaRecorder
- Speech-to-text transcription via Deepgram
- Display of transcribed text in UI
- Works in both browser and Tauri desktop app

---

## 🏗 Architecture Overview

The application is structured with a clear separation of concerns:

src/
├── components/
│ ├── Recorder.jsx # Handles user interaction & recording control
│ └── Transcript.jsx # Displays transcription output
│
├── services/
│ ├── audioService.js # Microphone access & audio recording
│ └── deepgramService.js # Deepgram REST API integration
│
├── App.jsx # Application state & orchestration
└── main.jsx # Entry point

#Setup Instructions
1️⃣ Clone the repository
git clone https://github.com/Renugasri-1/wispr-flow-clone
cd wispr-flow-clone

2️⃣ Install dependencies
npm install

3️⃣ Configure environment variables
Create a .env file in the project root:
VITE_DEEPGRAM_API_KEY=your_deepgram_api_key

⚠️ Do not commit .env. Use .env.example as reference.

4️⃣ Run in browser (development)
npm run dev
Open:
http://localhost:5174

5️⃣ Run as desktop application
npx tauri dev

🎤 How It Works
User holds the “Hold to Talk” button
Audio is recorded using the browser MediaRecorder API
On release, the audio is sent to Deepgram via REST API
Deepgram processes the audio and returns transcription
Transcribed text is displayed in the application

⚠️ Known Limitations
Uses REST-based transcription 
No advanced UI styling or animations
No offline transcription support
Minimal error handling 

📽 Demo Video
A demo video showcasing:
Desktop app launch
Voice recording
Speech-to-text transcription

👉 Demo video link:





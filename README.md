# dotnotes-auth-app
Application developed with React and user authentication, built to meet the needs of a company. The project has since been discontinued. [ Advanced ]

## How to Run

1. Clone this repository (or extract `dotnotes-auth-app-main.zip`).
2. Make sure Node.js (v18+) is installed.
3. Open a terminal in the project root (where `package.json` is).
4. Install dependencies:

```bash
npm install
```

5. Create a project at [console.firebase.google.com](https://console.firebase.google.com), then go to **Project Settings > Your apps** to get your config values. Also enable **Authentication (Email/Password)** and **Firestore Database** for the project.
6. Copy `.env.example` to `.env` and fill in your Firebase credentials:

```properties
EXPO_PUBLIC_FIREBASE_API_KEY=YOUR_API_KEY
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
EXPO_PUBLIC_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=YOUR_SENDER_ID
EXPO_PUBLIC_FIREBASE_APP_ID=YOUR_APP_ID
EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID=YOUR_MEASUREMENT_ID
```

7. Install the **Expo Go** app on your phone to run it via QR code.
8. Start the application:

```bash
npm start
```

The application will be available via the Metro Bundler, and can be opened with:

```text
Expo Go (scan QR code) — Android/iOS
npx expo start --web — http://localhost:8081
```

## Project Tree

```
dotnotes-auth-app
├─ app.json
├─ babel.config.js
├─ eslint.config.js
├─ LICENSE
├─ metro.config.js
├─ package-lock.json
├─ package.json
├─ README.md
└─ src
   ├─ app
   │  ├─ (auth)
   │  │  ├─ forgotpass.jsx
   │  │  ├─ login.jsx
   │  │  ├─ register.jsx
   │  │  └─ _layout.jsx
   │  ├─ (drawer)
   │  │  ├─ archived.jsx
   │  │  ├─ home.jsx
   │  │  └─ _layout.jsx
   │  ├─ (stack)
   │  │  └─ create-note.jsx
   │  ├─ index.jsx
   │  └─ _layout.jsx
   ├─ assets
   │  └─ svg
   │     └─ Logo.svg
   ├─ components
   │  └─ safe-area.jsx
   ├─ constants
   │  └─ messages.jsx
   ├─ database
   │  └─ notesDB.js
   ├─ services
   │  ├─ controllers
   │  │  ├─ forgotpass-controller.js
   │  │  ├─ login-controller.js
   │  │  ├─ notes-controller.js
   │  │  └─ register-controller.js
   │  └─ firebase.js
   └─ styles
      ├─ back-button.jsx
      ├─ bold-button.jsx
      ├─ button-primary.jsx
      ├─ button-secodary.jsx
      ├─ global.jsx
      ├─ italic-button.jsx
      ├─ menu-button.jsx
      ├─ note-button.jsx
      └─ plus-button.jsx

```
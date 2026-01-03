# Showduino Marketing Website

Location: `/website`

Install and run:

1. Install dependencies
   npm install

2. Run dev server
   npm run dev

3. Build for production
   npm run build

4. (Optional) Deploy to Firebase Hosting
   - Configure your Firebase project and set environment variables (see .env.example)
   - npm run build
   - firebase deploy

Environment variables (.env.local or CI):

VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_FIREBASE_MEASUREMENT_ID=
VITE_BUY_URL=https://example.com/checkout

Notes about Firestore:
- This site optionally writes lead and support forms to Firestore collections `leads` and `supportTickets`.
- If you enable Firestore, ensure your Firestore rules allow writes from your web app or protect with proper rules. For local development you can allow authenticated writes or temporarily allow write access.

# Next.js + Firebase Hosting

This project is a Next.js app configured for Firebase Hosting (framework-aware deployment).

## Run locally

```bash
npm run dev
```

## Deploy to Firebase

### 1) Install dependencies

```bash
npm install
```

### 2) Log in to Firebase

```bash
npm run firebase:login
```

### 3) Link this folder to your Firebase project

```bash
npm run firebase:use
```

Choose your Firebase project from the prompt. This creates `.firebaserc` with your project alias.

### 4) Deploy

```bash
npm run firebase:deploy
```

After deploy, Firebase CLI prints your live Hosting URL.

## Notes

- Firebase config is in `firebase.json`.
- Hosting backend region is set to `us-central1`.
- If you do not want an interactive project selection, run:

```bash
npx firebase deploy --only hosting --project YOUR_FIREBASE_PROJECT_ID
```

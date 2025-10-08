// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8zCD9y3XeFvXImcBZOjXj32Ph6QlaUao",
  authDomain: "discord-clone-udemy-29115.firebaseapp.com",
  projectId: "discord-clone-udemy-29115",
  storageBucket: "discord-clone-udemy-29115.firebasestorage.app",
  messagingSenderId: "40378728555",
  appId: "1:40378728555:web:5bec64afa0c8680ae0b12e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };

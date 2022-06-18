import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwroADHrjXda1vAdpqcmca3Yn-9Ov3sUw",
  authDomain: "stock-journal-325d0.firebaseapp.com",
  projectId: "stock-journal-325d0",
  storageBucket: "stock-journal-325d0.appspot.com",
  messagingSenderId: "415494816432",
  appId: "1:415494816432:web:f2f0986882b73e2d41b175",
  measurementId: "G-7DC761BYC5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

//Initialize Cloud Firestore
const db = getFirestore(app);

export { auth, db };

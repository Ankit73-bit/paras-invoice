// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAoKb10nmx3ONVi0Ttulixxz-HtOuBXYAc",
  authDomain: "parasinvoice-2145a.firebaseapp.com",
  projectId: "parasinvoice-2145a",
  storageBucket: "parasinvoice-2145a.appspot.com",
  messagingSenderId: "796884998688",
  appId: "1:796884998688:web:ddddb8d7219b145774fa45",
  measurementId: "G-D316EE1G7R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// getAuth
export const auth = getAuth();

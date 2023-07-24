// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEBajRT3m3XAMv1_ehQY4Hb-Q5z98MaQs",
  authDomain: "vite-contacts-5babc.firebaseapp.com",
  projectId: "vite-contacts-5babc",
  storageBucket: "vite-contacts-5babc.appspot.com",
  messagingSenderId: "35949577431",
  appId: "1:35949577431:web:41ca8953c82434d5211c92"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
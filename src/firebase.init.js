// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAx_kGNZ31fiXezwaPBLH9mDkn89hMFF8k",
  authDomain: "fir-autontication-project.firebaseapp.com",
  projectId: "fir-autontication-project",
  storageBucket: "fir-autontication-project.appspot.com",
  messagingSenderId: "158905079551",
  appId: "1:158905079551:web:acd171d8e29b7a8c431eca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkgsUXKGgpUQRZHDbk_PZRb_mteX7lvyY",
    authDomain: "movie-portal-262fe.firebaseapp.com",
    projectId: "movie-portal-262fe",
    storageBucket: "movie-portal-262fe.firebasestorage.app",
    messagingSenderId: "724927880202",
    appId: "1:724927880202:web:59c4f40952531dfce153f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
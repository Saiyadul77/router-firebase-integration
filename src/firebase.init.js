// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDjuNWkw4EQy1rpPaTLxVORomdVKMMRzYc",
    authDomain: "router-firebase-integrat-fe23f.firebaseapp.com",
    projectId: "router-firebase-integrat-fe23f",
    storageBucket: "router-firebase-integrat-fe23f.appspot.com",
    messagingSenderId: "452897361339",
    appId: "1:452897361339:web:56426f7a90a3764d47889e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
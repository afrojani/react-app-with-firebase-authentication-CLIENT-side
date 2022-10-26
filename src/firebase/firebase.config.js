// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAG0sziddzXOMH5fHR7u1aAK9EJrGdD0MI",
    authDomain: "assignment10-eduapp-authserver.firebaseapp.com",
    projectId: "assignment10-eduapp-authserver",
    storageBucket: "assignment10-eduapp-authserver.appspot.com",
    messagingSenderId: "1037717244016",
    appId: "1:1037717244016:web:cd986a71567ea8e81eccb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
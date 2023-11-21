// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API,
	authDomain: "social-57e03.firebaseapp.com",
	projectId: "social-57e03",
	storageBucket: "social-57e03.appspot.com",
	messagingSenderId: "127891845898",
	appId: "1:127891845898:web:cfc475b1e4709a921fc0f3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

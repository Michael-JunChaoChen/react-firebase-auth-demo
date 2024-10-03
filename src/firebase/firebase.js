import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDowBTq6koUsiq4n8rRK_mUWAr1ty2eO7c",
    authDomain: "fir-auth-demo-ec2c0.firebaseapp.com",
    projectId: "fir-auth-demo-ec2c0",
    storageBucket: "fir-auth-demo-ec2c0.appspot.com",
    messagingSenderId: "807220666020",
    appId: "1:807220666020:web:9a8db8359bff0c968ad031"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

export { app, auth, db };

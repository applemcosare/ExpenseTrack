import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHJ9dTVbsAWaXrugxkxaAFa3K5WkNaeYk",
  authDomain: "todos-443b0.firebaseapp.com",
  projectId: "todos-443b0",
  storageBucket: "todos-443b0.appspot.com",
  messagingSenderId: "568374116234",
  appId: "1:568374116234:web:783bcdfa1b4e7980969273",
  measurementId: "G-EZZFECZM97"
};



initializeApp(firebaseConfig);

const db = getFirestore();
export default db
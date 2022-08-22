import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCj0gelpqfB1wiXn39K0tjXerVxkHyp93w",
    authDomain: "talabat-user.firebaseapp.com",
    projectId: "talabat-user",
    storageBucket: "talabat-user.appspot.com",
    messagingSenderId: "93931370517",
    appId: "1:93931370517:web:d8fb12170581b480a9361c",
    measurementId: "G-NGTSB1Q0SV"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);
  export const db = getFirestore(app);
  
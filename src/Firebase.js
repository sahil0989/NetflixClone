import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDlF-Dcudv9J6TPIh4iXYyl9uZ-MASsb30",
  authDomain: "movie-app-e7a14.firebaseapp.com",
  projectId: "movie-app-e7a14",
  storageBucket: "movie-app-e7a14.appspot.com",
  messagingSenderId: "1023052130034",
  appId: "1:1023052130034:web:019f934dd7ee804dccd26b",
  measurementId: "G-2462BYLKFM"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
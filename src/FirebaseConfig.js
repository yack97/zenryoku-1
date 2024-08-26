// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSBoBSqNXwH_CHke2PhVU1OV_MOFZ0-PI",
  authDomain: "zenryoku-a4c46.firebaseapp.com",
  projectId: "zenryoku-a4c46",
  storageBucket: "zenryoku-a4c46.appspot.com",
  messagingSenderId: "11548706291",
  appId: "1:11548706291:web:92a2c55157982e12393e86",
  measurementId: "G-4G1PC16L37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Auth
const auth = getAuth(app);
onAuthStateChanged(auth, user => {
  if (user) {
    // Usuario ha iniciado sesión
    console.log("Usuario autenticado:", user);
  } else {
    // Usuario no ha iniciado sesión
    console.log("No hay usuario autenticado");
  }
});

// Exportar las instancias de Firestore, Auth, Storage y Analytics
export { db, auth, analytics };
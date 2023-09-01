// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf5vglwov2_Jjo-KQG6qKsPuB_WJ1fKBg",
  authDomain: "todo-list-49389.firebaseapp.com",
  projectId: "todo-list-49389",
  storageBucket: "todo-list-49389.appspot.com",
  messagingSenderId: "358214990194",
  appId: "1:358214990194:web:69835133170d232cd105eb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

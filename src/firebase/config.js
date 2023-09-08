// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf5vglwov2_Jjo-KQG6qKsPuB_WJ1fKBg",
  authDomain: "todo-list-49389.firebaseapp.com",
  databaseURL:
    "https://todo-list-49389-default-rtdb.europe-west1.firebasedatabase.app",
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
export const db = getDatabase(app);

const data = {
  userId: {
    iu: [
      { id: "1", title: "some important thing", subTitles: [], notes: "" },
      { id: "2", title: "another important thing", subTitles: [], notes: "" },
    ],
    inu: [],
    niu: [],
    ninu: [],
  },
};

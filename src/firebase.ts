import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD4w4uyzF9aoRewOhZrn7Up73UVBirI3Wo",
  authDomain: "nwitter-reloaded-c36f6.firebaseapp.com",
  projectId: "nwitter-reloaded-c36f6",
  storageBucket: "nwitter-reloaded-c36f6.appspot.com",
  messagingSenderId: "403012329035",
  appId: "1:403012329035:web:6174b05052dbf34a5577ce"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
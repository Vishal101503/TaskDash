
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: YOUR_API_KEY,
  authDomain: YOUR_AUTHDOMAIN,
  projectId: YOUR_PROJECTID,
  storageBucket: YOUR_STORAGEBUCKET,
  messagingSenderId: YOUR_MESSAGING_SENDER_ID,
  appId: YOUR_APPID
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

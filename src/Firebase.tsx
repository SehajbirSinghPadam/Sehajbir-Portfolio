import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDDw22jJK5h3YirxZwXvXeY6OhykjiA1qo",
  authDomain: "portfolio-d1965.firebaseapp.com",
  projectId: "portfolio-d1965",
  storageBucket: "portfolio-d1965.firebasestorage.app",
  messagingSenderId: "91239086107",
  appId: "1:91239086107:web:d5beb60f609bb4979220be",
  measurementId: "G-TWS10QL276"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchatapp-5aeb6.firebaseapp.com",
  projectId: "reactchatapp-5aeb6",
  storageBucket: "reactchatapp-5aeb6.firebasestorage.app",
  messagingSenderId: "487905041736",
  appId: "1:487905041736:web:0ae288bdfdb546c898677d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
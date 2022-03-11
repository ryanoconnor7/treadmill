import "../styles/globals.css";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "@firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyDZzNWJzu5mPDo_CHEfcJzJp9ofSe4LmgE",
  authDomain: "treadmill-4d65b.firebaseapp.com",
  projectId: "treadmill-4d65b",
  storageBucket: "treadmill-4d65b.appspot.com",
  messagingSenderId: "405014925553",
  appId: "1:405014925553:web:f88b82d7668800f15c1950",
  measurementId: "G-QHH341C5ZR",
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

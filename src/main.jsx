import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCIHOFnDbtx6m0IwUUIdowADM90Mkk2Was",
  authDomain: "coderhouse-ecommerce-ba5f5.firebaseapp.com",
  projectId: "coderhouse-ecommerce-ba5f5",
  storageBucket: "coderhouse-ecommerce-ba5f5.appspot.com",
  messagingSenderId: "969479596413",
  appId: "1:969479596413:web:57da393f8d8ba2cb45c414"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

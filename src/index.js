import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'font-awesome/css/font-awesome.css';
import firebase from 'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyBNopjT9i2RX_WLEitBmbIdIsrYzlPO_p8",
    authDomain: "memorama-react.firebaseapp.com",
    databaseURL: "https://memorama-react.firebaseio.com",
    projectId: "memorama-react",
    storageBucket: "",
    messagingSenderId: "600179338085"
  });

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

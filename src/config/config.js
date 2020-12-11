import * as firebase from 'firebase/app';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCiqZxXHHsXVp5FAfjN3jPjtBO3wJAOMr8",
  authDomain: "digiwigi-aaf1e.firebaseapp.com",
  databaseURL: "https://digiwigi-aaf1e.firebaseio.com",
  projectId: "digiwigi-aaf1e",
  storageBucket: "digiwigi-aaf1e.appspot.com",
  messagingSenderId: "332967376374",
  appId: "1:332967376374:web:4f8f5464ac5563bc5ac3d7",
  measurementId: "G-FK68WFZH26"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
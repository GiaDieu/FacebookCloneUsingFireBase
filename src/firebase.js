import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQtVLLa1Q7pUM6TmHZGdN-xYJdCBysKBk",
  authDomain: "facebookclonegiadieu.firebaseapp.com",
  databaseURL: "https://facebookclonegiadieu.firebaseio.com",
  projectId: "facebookclonegiadieu",
  storageBucket: "facebookclonegiadieu.appspot.com",
  messagingSenderId: "807322710327",
  appId: "1:807322710327:web:1d3919c61934dd9fb5aab2",
  measurementId: "G-CH0QL26ZVY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

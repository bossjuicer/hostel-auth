import firebase from "firebase";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJk05OqFEVltHu6sZqXr1nUxI0OkSsyUY",
  authDomain: "hostel-assign.firebaseapp.com",
  projectId: "hostel-assign",
  storageBucket: "hostel-assign.appspot.com",
  messagingSenderId: "832242736821",
  appId: "1:832242736821:web:0c3482990ae6d9ca5968fc",
  // measurementId: "G-EXV4WK5B8M"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase
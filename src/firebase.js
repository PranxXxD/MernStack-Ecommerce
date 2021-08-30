import firebase from 'firebase/app';
import "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyAgA060QyK8-w1PjBBOczSmOs7rH_vixQw",
  authDomain: "mernstack-e-com.firebaseapp.com",
  projectId: "mernstack-e-com",
  storageBucket: "mernstack-e-com.appspot.com",
  messagingSenderId: "1037574203017",
  appId: "1:1037574203017:web:b775b1df518a6d3aca0858"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Export

  export const auth = firebase.auth();
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


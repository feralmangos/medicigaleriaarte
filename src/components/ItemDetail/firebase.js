import firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {

    apiKey: "AIzaSyCNOJWjDtZehfbukFm617iNDY1sVObxH1Q",
    authDomain: "react-arte-medici.firebaseapp.com",
    projectId: "react-arte-medici",
    storageBucket: "react-arte-medici.appspot.com",
    messagingSenderId: "520528491708",
    appId: "1:520528491708:web:b8ecb67ed373126b944cb9"

};
const app = firebase.initializeApp(firebaseConfig);
export function getFirebase() {
    return app;
}
export const database = firebase.firestore();
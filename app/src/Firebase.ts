import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import firebaseConfig from "./firebaseConfig";
firebase.initializeApp(firebaseConfig.firebaseConfig);
const firestore = firebase.firestore();

export { firestore };

import firebase from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';

import fireBaseConfig from './fireBaseConfig';


const firebaseApp = firebase.initializeApp(fireBaseConfig);

const db = firebaseApp.firestore();
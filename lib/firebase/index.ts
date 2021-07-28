import firebase from 'firebase';
import { firebase as firebaseEnv } from '@/config/env';

try {
  firebase.initializeApp(firebaseEnv);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack);
  }
}

const fire = firebase;

export default fire;

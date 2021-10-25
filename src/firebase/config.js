import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBXaNv6rM5pKRMqfwmDQwVIGEoACjq_0Cc",
    authDomain: "vuejs-42e79.firebaseapp.com",
    projectId: "vuejs-42e79",
    storageBucket: "vuejs-42e79.appspot.com",
    messagingSenderId: "948092467894",
    appId: "1:948092467894:web:10bf9fe3ccffa593648417"
};

firebase.initializeApp(firebaseConfig)

const timestamp = firebase.firestore.FieldValue.serverTimestamp
const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()

export { projectFirestore, timestamp, projectAuth }

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyArQ4Y-CvsXYyKoA4FWkyvHmjtqrwWX-Es",
    authDomain: "mjackson-my-brand.firebaseapp.com",
    databaseURL: "https://mjackson-my-brand.firebaseio.com",
    projectId: "mjackson-my-brand",
    storageBucket: "mjackson-my-brand.appspot.com",
    messagingSenderId: "776224693679",
    appId: "1:776224693679:web:78c67e2e5f025cafc3e35a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
db.settings({timestampsInSnapshots: true});
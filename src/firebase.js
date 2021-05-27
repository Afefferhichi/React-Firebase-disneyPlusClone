const firebaseConfig = {
    apiKey: "AIzaSyBtBVsw1dnGW7xwX3evtmGkHze9RCS6bkE",
    authDomain: "disneyplus-clone-52c9f.firebaseapp.com",
    projectId: "disneyplus-clone-52c9f",
    storageBucket: "disneyplus-clone-52c9f.appspot.com",
    messagingSenderId: "357192091434",
    appId: "1:357192091434:web:60e49b64d73d7e06f6c053",
    measurementId: "G-ZZ4X9N9WEL"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
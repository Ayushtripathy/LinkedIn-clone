import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCgVif8E2MI-d2KHOjL1spfYKKVDe4Aw4Y",
  authDomain: "linkedin-clone-bb939.firebaseapp.com",
  projectId: "linkedin-clone-bb939",
  storageBucket: "linkedin-clone-bb939.appspot.com",
  messagingSenderId: "922294945579",
  appId: "1:922294945579:web:42a3a241292ccf0375276e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

const storage = firebase.storage();

export { auth, provider, storage };

export default db;

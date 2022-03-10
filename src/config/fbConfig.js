// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5Gf-4QCd_PSoBb6Iq4KkMrhNpeaq0QOs",
  authDomain: "demo1-8a51a.firebaseapp.com",
  projectId: "demo1-8a51a",
  storageBucket: "demo1-8a51a.appspot.com",
  messagingSenderId: "236206584422",
  appId: "1:236206584422:web:d7f70a5e3c612b322df3a7",
  measurementId: "G-JY2GHDNP16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getProjects(db) {
  const projectsCol = collection(db, 'test');
  const projectSnapshot = await getDocs(projectsCol);
  const projectList = projectSnapshot.docs.map(doc => doc.data());
  return projectList;
}

export default db

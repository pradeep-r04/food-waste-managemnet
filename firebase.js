import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBo1a74IrCp8_wNYNoy4bumIG6FVjPdHNg",
  authDomain: "daawat-food-waste-management.firebaseapp.com",
  projectId: "daawat-food-waste-management",
  storageBucket: "daawat-food-waste-management.appspot.com",
  messagingSenderId: "849758831795",
  appId: "1:849758831795:web:abe5c6b27dc663e442dcc6",
  measurementId: "G-209MRJH318",
  // ✅ Add this field if not already there:
  databaseURL: "https://daawat-food-waste-management-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Correct way to get Realtime Database instance
const db = getDatabase(app);

// Auth
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, ref, push, auth, provider, signInWithPopup };



import { db, ref, push } from "./firebase.js";

// Example write
push(ref(db, 'events'), {
  title: 'Free Dinner at Community Hall',
  host: 'Pradeep Singh',
  location: 'Delhi',
  date: '2025-05-14'
})
.then(() => {
  console.log("✅ Data saved successfully!");
})
.catch((error) => {
  console.error("❌ Error saving data:", error);
});

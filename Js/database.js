import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDLVuFsKSvHZLeKmRTi9NSlx5AA2D4TYog",
    authDomain: "productivity-tracker-f2229.firebaseapp.com",
    projectId: "productivity-tracker-f2229",
    storageBucket: "productivity-tracker-f2229.appspot.com",
    messagingSenderId: "41327823874",
    appId: "1:41327823874:web:b6c6904cda2cc72f9b6b1b",
    databaseURL: "https://productivity-tracker-f2229-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const database = getDatabase(app);
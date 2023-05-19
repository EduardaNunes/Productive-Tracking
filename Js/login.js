import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDLVuFsKSvHZLeKmRTi9NSlx5AA2D4TYog",
    authDomain: "productivity-tracker-f2229.firebaseapp.com",
    projectId: "productivity-tracker-f2229",
    storageBucket: "productivity-tracker-f2229.appspot.com",
    messagingSenderId: "41327823874",
    appId: "1:41327823874:web:b6c6904cda2cc72f9b6b1b"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

btnSubmit.addEventListener('click', () => {

    const userInput = document.querySelector('#username-input').value
    const passwordInput = document.querySelector('#password-input').value

    if (btnSubmitValue === "login"){
        login(userInput, passwordInput)
    }else if (btnSubmitValue === "register"){
        register(userInput, passwordInput)
    }else{
        console.log('btnSubmit: ERROR')
    }
})

function register(username, password){

    const email = username + '@gmail.com'

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
  
      const user = userCredential.user;
  
      console.log(user)
      window.alert('Conta Criada com Sucesso')
  
    })
    .catch((error) => {

      const errorCode = error.code;
      const errorMessage = error.message;
  
      console.log(errorCode + errorMessage)
  
    });
}

function login(username, password){

    const email = username + '@gmail.com'

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

      const user = userCredential.user;

      window.alert('Conta Logada com Sucesso')
      location.replace("../Pages/main_page.html")

    })
    .catch((error) => {

      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorCode + errorMessage)

    });
}

function logout(){

    signOut(auth).then(() => {
        
        window.alert('You logged out')

      }).catch((error) => {

        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode + errorMessage)

      });
}


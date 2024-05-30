import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import {auth} from "./database.js"

onAuthStateChanged(auth, (user) => {

    if (user) {
        console.log('User Is Signed In')
        window.location.href = "./Pages/main_page.html"
    }          
})

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
  
      window.alert('Conta Criada com Sucesso')
  
    })
    .catch((error) => {

      const errorCode = error.code;
      const errorMessage = error.message;
  
      console.log(errorCode + errorMessage)
  
    })
}

function login(username, password){

    const email = username + '@gmail.com'

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

      const user = userCredential.user;
      //console.log(user.uid)

      window.alert('Conta Logada com Sucesso')
      window.location.href = "./Pages/main_page.html" 

    })
    .catch((error) => {

      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorCode + errorMessage)

    })
}


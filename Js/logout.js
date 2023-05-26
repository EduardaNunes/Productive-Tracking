import {signOut} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import {auth} from "./database.js"

const btnLogout = document.querySelector('.btn-logout')
btnLogout.addEventListener('click', logout)

function logout(){

    if(confirm('Are you sure you want to logout?')){
        
        signOut(auth).then(() => {
            
            window.alert('You logged out')
    
            }).catch((error) => {
    
            const errorCode = error.code;
            const errorMessage = error.message;
    
            console.log(errorCode + errorMessage)
    
        });
    }
}
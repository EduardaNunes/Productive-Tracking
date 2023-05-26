import {newTask}  from "./newTask.js"
import {onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import {ref, set, get, getDatabase, child, remove, update} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-database.js";
import {auth, database} from "./database.js"

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const date = new Date()
let yearSelected = date.getFullYear()
let monthSelected = months[date.getMonth()]
let daySelected = date.getDate()
let anyTask = false

onAuthStateChanged(auth, (user) => {

    if (user) {

        const uid = user.uid;
        const date = new Date()
        const dbRef = ref(getDatabase());

        get(child(dbRef, `users/${uid}/${date.getFullYear()}/${months[date.getMonth()]}/${date.getDate()}`)).then((snapshot) => {
            if (snapshot.exists()) {

                snapshot.forEach(element => {
                    const task = new newTask(element.val().id, element.val().text, element.val().complete)
                    task.create(checkTask, deleteTask, tasksConteiner, changeInputText, inputTextEnter)
                    anyTask = true
                });
                
            } else {
                console.log("No data available");
                createNewTask() 
            }
        }).catch((error) => {
            console.error(error);
        });

    }else {
    console.log('User Is Signed Out')
    location.replace("../index.html")
  }
});

function createTaskId(){
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth()+1
    const day = date.getDate()
    const hour = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    return `${year}${month}${day}${hour}${minutes}${(seconds<10?'0':'') + seconds}`
}

const tasksConteiner = document.querySelector('.tasks')
const btnNewTask = document.querySelector('.btn-new-task')

btnNewTask.addEventListener('click', createNewTask)


function createNewTask(){

    if(anyTask == false || focusOnLastInput()[0].value != '' ){

        anyTask = true;

        btnNewTask.disabled = true
    
        setTimeout(()=>{
            btnNewTask.disabled = false
        },1000)
    
        const userUid = auth.currentUser.uid
        const date = new Date()
    
        const newTaskSound = new Audio('../Sounds/newTaskSound.mp3')
        newTaskSound.volume = 0.8
        newTaskSound.play()
    
        const task = new newTask(createTaskId(), '', false)
        task.create(checkTask, deleteTask, tasksConteiner, changeInputText, inputTextEnter)

        focusOnLastInput()
    
        set(ref(database, 'users/' + userUid + `/${date.getFullYear()}`+ `/${months[date.getMonth()]}`+ `/${date.getDate()}`+ `/${task.id}`),task)
    
        //Fazer a barra ser "scrollada" para baixo -> dessa forma a nova task adicionada estará sempre visível para o usuário
        tasksConteiner.scrollTo({top:-50})
        setTimeout(() =>{
            tasksConteiner.scrollTo({top:0, behavior: 'smooth'})
        }, 200)
    }
}

function deleteTask(){

    const user = auth.currentUser.uid
    
    const deleteTaskSound = new Audio('../Sounds/deleteTaskSound.mp3')
    deleteTaskSound.volume = 0.8
    deleteTaskSound.play()

    this.parentElement.classList.add('delete-animation')

    setTimeout(() => {
        this.parentElement.remove()
    }, 600)

    const dbRef = ref(getDatabase(),`users/${user}/${yearSelected}/${monthSelected}/${daySelected}/${this.id}`)
    remove(dbRef)

    if(focusOnLastInput().length == 1){
        anyTask = false
    }
}

function checkTask(){

    const user = auth.currentUser.uid
    const dbRef = ref(getDatabase(),`users/${user}/${yearSelected}/${monthSelected}/${daySelected}/${this.id}`)
    
    this.firstChild.classList.toggle('hide')
    this.firstChild.classList.add('check-animation')

    if (!this.firstChild.classList.contains('hide')){

        const checkMarkSound = new Audio('../Sounds/checkmark.mp3')
        checkMarkSound.volume = 0.3
        checkMarkSound.play()

        update(dbRef, {complete:true})

    }else{
        const uncheckSound = new Audio('../Sounds/uncheckSound.mp3')
        uncheckSound.volume = 0.8
        uncheckSound.play()

        update(dbRef, {complete:false})
    } 
}

function changeInputText(e){

    if (e.target.value != ''){
        const user = auth.currentUser.uid
        const dbRef = ref(getDatabase(),`users/${user}/${yearSelected}/${monthSelected}/${daySelected}/${this.id}`)
    
        update(dbRef, {text:e.target.value})
    }else{
        deleteTask()
    }
}

let enterTimeout = false

function inputTextEnter(e){

    if(event.key === 'Enter' && enterTimeout == false && e.target.value != '' && focusOnLastInput()[0].value != '') {
        createNewTask()   
        enterTimeout = true 

        setTimeout(() => {
            enterTimeout = false
        }, 1000)
    }
}

function focusOnLastInput(){

    const inputs = document.querySelectorAll('input')

    setTimeout(() =>{
        inputs[0].focus()
    },700)

    return inputs
}

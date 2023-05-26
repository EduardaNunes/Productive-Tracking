const tasksConteiner = document.querySelector('.tasks')
const btnNewTask = document.querySelector('.btn-new-task')
let i = 0
const tasks = []


btnNewTask.addEventListener('click', () =>{

    const newTaskSound = new Audio('../Sounds/newTaskSound.mp3')
    newTaskSound.volume = 0.8
    newTaskSound.play()

    i++

    const task = new newTask('identificador'+i, 'oi ' + i, false)
    task.create()
    tasks.push(task)

    //Fazer a barra ser "scrollada" para baixo -> dessa forma a nova task adicionada estará sempre visível para o usuário
    tasksConteiner.scrollTo({top:-50})
    setTimeout(() =>{
        tasksConteiner.scrollTo({top:0, behavior: 'smooth'})
    }, 200)

})

const task = new newTask('identificador'+i, 'oi ' + i, false)
task.create()
tasks.push(task)

function deleteTask(){
    
    const deleteTaskSound = new Audio('../Sounds/deleteTaskSound.mp3')
    deleteTaskSound.volume = 0.8
    deleteTaskSound.play()

    this.parentElement.classList.add('delete-animation')

    setTimeout(() => {
        this.parentElement.remove()
        const identificador = tasks.findIndex(obj => obj.id == this.id)
        tasks.splice(identificador, 1)

    }, 600)
}

function checkTask(){
    
    this.firstChild.classList.toggle('hide')

    this.firstChild.classList.add('check-animation')

    if (!this.firstChild.classList.contains('hide')){

        const checkMarkSound = new Audio('../Sounds/checkmark.mp3')
        checkMarkSound.volume = 0.3
        checkMarkSound.play()
        tasks[identificador].complete = true

    }else{

        const uncheckSound = new Audio('../Sounds/uncheckSound.mp3')
        uncheckSound.volume = 0.8
        uncheckSound.play()
        tasks[identificador].complete = false
    }
}

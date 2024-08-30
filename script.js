let todoList =JSON.parse(localStorage.getItem("task"))||[]
const addTodo = document.getElementById("inputBtn")
const inputBox = document.getElementById("inputBox")

displayItems()

addTodo.addEventListener("click",()=>{
    let todoItem = inputBox.value
    todoList.push(todoItem)
    inputBox.value=''
    saveAndDisplayItem()

})
function displayItems(){
    let displayElement = document.getElementById("list-container")
    displayElement.innerHTML =''
    for(let i=0; i<todoList.length; i++){
        displayElement.innerHTML += `
        <div class='listRow'>
        <li >${todoList[i]}</li>
        <span class='delete-btn' onclick='deleteItem(${i}); saveAndDisplayItem()'>x</span>
        </div>
        `
    }
    console.log(todoList);
}
function saveAndDisplayItem(){
    saveData()
    displayItems()
}
function deleteItem(index){
    todoList.splice(index,1)
    saveAndDisplayItem()
}
function saveData(){
    localStorage.setItem("task",JSON.stringify(todoList))
}
saveAndDisplayItem()

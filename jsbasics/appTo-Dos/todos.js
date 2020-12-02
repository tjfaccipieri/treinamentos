const listElement = document.querySelector('#app ul');
const inputElement = document.querySelector('#app input');
const buttonElement = document.querySelector('#app button');
const todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){
listElement.innerHTML = '';
  for (todo of todos) {
    const todoElement = document.createElement('li');
    const markElement = document.createElement('input');
    const todoText = document.createTextNode(todo);
    const linkElement = document.createElement('a');
    const linkImage = document.createElement('img');
    const pos = todos.indexOf(todo);
    
    linkImage.src = "./images/deleteButton.svg";
    linkImage.alt = "Excluir To-do";
    markElement.type = "checkbox";
    markElement.className = "check";
    
    linkElement.setAttribute('href', '#');
    linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');
    todoElement.appendChild(markElement);
    todoElement.appendChild(todoText);
    linkElement.appendChild(linkImage);
    todoElement.appendChild(linkElement);
    listElement.appendChild(todoElement);
    
  }
}

renderTodos();

function addTodo(){
  const todoText = inputElement.value;
  todos.push(todoText);
  inputElement.value = '';
  renderTodos();
  saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {
  todos.splice(pos, 1);
  renderTodos();
  saveToStorage();
}

function saveToStorage(){
  localStorage.setItem('list_todos', JSON.stringify(todos));
}
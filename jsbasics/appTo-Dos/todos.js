const listElement = document.querySelector('#app ul');
const inputElement = document.querySelector('#app input');
const buttonElement = document.querySelector('#app button');
const todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){
listElement.innerHTML = '';
  for (todo of todos) {
    const todoElement = document.createElement('li');
    const todoText = document.createTextNode(todo);
    const linkElement = document.createElement('a');
    // const linkText = document.createTextNode(' Excluir');
    const linkImage = document.createElement('img');
    linkImage.src = "./images/deleteButton.svg";
    linkImage.style.width = "18px";
    linkImage.style.height = "18px";
    // linkImage.style.position = "relative";
    const pos = todos.indexOf(todo);
    
    linkElement.setAttribute('href', '#');
    linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');
    linkElement.appendChild(linkImage);
    todoElement.appendChild(todoText);
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
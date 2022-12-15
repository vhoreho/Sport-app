const form = document.getElementById('form');
const todolist = document.getElementById('todolist');

function addTodo(todo) {
  const div = document.createElement('div');
  const todoTitle = document.createElement('span');
  todoTitle.classList.add('p-4', 'bg-gray');
  todoTitle.innerText = todo.name;
  const todoGoal = document.createElement('span');
  todoGoal.classList.add('p-4', 'bg-dark', 'text-white');
  todoGoal.innerText = todo.goal;
  div.appendChild(todoTitle);
  div.appendChild(todoGoal);
  todolist.appendChild(div);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const data = {
    name: formData.get('name'),
    goal: formData.get('goal'),
    type: formData.get('type'),
  };
  addTodo(data);
});

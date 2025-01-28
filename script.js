const addButton = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

if (addButton && todoInput && todoList) {
    addButton.addEventListener('click', function () {
        const task = todoInput.value.trim();

        if (task === '') {
            alert('Please enter a task!');
            return;
        }

        const listItem = document.createElement('li');
        listItem.className = 'todo-item';
        listItem.innerHTML = `
            <span>${task}</span>
            <button class="delete-btn">Delete</button>
        `;

        todoList.appendChild(listItem);

        listItem.querySelector('.delete-btn').addEventListener('click', function () {
            listItem.remove();
        });
    });
}
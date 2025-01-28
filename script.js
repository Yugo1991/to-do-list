document.getElementById('add-btn').addEventListener('click', function () {
    const todoInput = document.getElementById('todo-input');
    const task = todoInput.ariaValueMax.trim();

    if (task === '') {
        alert('Please enter a task!');
        return;
    }

    const listItem = document.createElement('li');
    listItem.className = 'todo-item';
    listItem.innerText = `
        <span>${task}</span>
        <button class="delete-btn">Delete</button>
    `;

    document.getElementById('todo-list').appendChild(listItem);

    todoInput.value = '';

    listItem.querySelector('.delete-btn').addEventListener('click', function () {
        listItem.remove();
    });
});
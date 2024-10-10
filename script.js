document.getElementById('addTaskButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        addTaskToList(taskText);
        taskInput.value = '';
    }
});

function addTaskToList(taskText) {
    const taskList = document.getElementById('taskList');
    const newTask = document.createElement('li');

    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;

    const buttonGroup = document.createElement('div');
    buttonGroup.className = 'button-group';

    const checkButton = document.createElement('button');
    checkButton.textContent = 'Check';
    checkButton.className = 'check-button';
    checkButton.addEventListener('click', function() {
        newTask.classList.toggle('completed');
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(newTask);
    });

    buttonGroup.appendChild(checkButton);
    buttonGroup.appendChild(deleteButton);

    newTask.appendChild(taskContent);
    newTask.appendChild(buttonGroup);

    taskList.appendChild(newTask);
}

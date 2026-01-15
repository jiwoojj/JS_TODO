const input = document.querySelector('.todo_wrapper input');
const addButton = document.querySelector('.more_btn');
const list = document.querySelector('.todo_list_wrap');

function addTodo() {
  const text = input.value.trim();
  if (!text) {
    return;
  }

  const item = document.createElement('li');
  item.className = 'todo_item';

  const label = document.createElement('span');
  label.textContent = text;

  const deleteButton = document.createElement('button');
  deleteButton.type = 'button';
  deleteButton.className = 'delete_btn';
  deleteButton.textContent = '삭제';
  deleteButton.addEventListener('click', () => {
    item.remove();
  });

  item.append(label, deleteButton);
  list.appendChild(item);

  input.value = '';
  input.focus();
}

addButton.addEventListener('click', addTodo);
input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addTodo();
  }
});

const input = document.querySelector('#todoInput');
const addBtn = document.querySelector('#addBtn');
const list = document.querySelector('#todoList');

addBtn.addEventListener('click', () => {
  const text = input.value;
  if (text === '') return;

  const li = document.createElement('li');
  li.textContent = text;

  li.addEventListener('click', () => {
    li.classList.toggle('done');
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '삭제';

  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(deleteBtn);
  list.appendChild(li);

  input.value = '';
});

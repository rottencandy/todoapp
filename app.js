'use strict';

let NotesList = [];

const container = document.getElementById('list-container');

function renderList() {
  container.innerHTML = NotesList.map(
    (note, index) => `
      <li class="notes ${note.checked ? 'checked' : ''}" id="${index}">
        <input class="checkbox" onclick="checkNote(this)" type="checkbox" ${
          note.checked ? 'checked' : ''
        }/>
        <p>
          ${note.content}
        </p>
        <button class="red" onclick="deleteNote(this)">delete</button>
      </li>
      `,
  ).join('\n');
}

const field = document.getElementById('add-field');

function addNote() {
  NotesList.push({
    content: field.value,
    checked: false,
  });
  renderList();

  // clear input field
  field.value = '';
}

function checkNote(ele) {
  NotesList[ele.parentElement.id].checked = ele.checked;
  renderList();
}

function deleteNote(ele) {
  NotesList.splice(ele.parentElement.id, 1);
  renderList();
}

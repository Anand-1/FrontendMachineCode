console.log('App is running');
import data from './data.js';

const fileList = document.getElementById('file-list');
const contentTitle = document.querySelector('.content h3');
const contentText = document.querySelector('.content p');
const newFolderBtn = document.getElementById('new-folder-btn');
const newFileBtn = document.getElementById('new-file-btn');

let explorerItems = [...data.files];

function renderItems(items) {
  fileList.innerHTML = '';

  items.forEach((file, index) => {
    const fileItem = document.createElement('div');
    const label = document.createElement('span');

    fileItem.className = 'file-item';
    fileItem.dataset.index = index;
    label.textContent = `${createIcon(file.type)} ${file.name}`;

    fileItem.addEventListener('click', () => {
      selectItem(fileItem, file, index);
    });

    fileItem.addEventListener('mouseover', () => {
      fileItem.classList.add('hovered');
    });

    fileItem.addEventListener('mouseout', () => {
      fileItem.classList.remove('hovered');
    });

    fileItem.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      createItem('folder');
    });

    fileItem.appendChild(label);
    fileList.appendChild(fileItem);
  });
}

function selectItem(fileItem, file, index) {
  document.querySelectorAll('.file-item.active').forEach((item) => {
    item.classList.remove('active');
  });

  fileItem.classList.add('active');
  contentTitle.textContent = file.name;
  contentText.textContent = `${file.type} • ${file.size} • Modified ${file.modified}`;
  fileItem.dataset.index = index;
}

function createItem(type = 'folder') {
  const promptLabel = type === 'folder' ? 'Enter folder name' : 'Enter file name';
  const defaultName = type === 'folder' ? 'New Folder' : 'New File.txt';
  const enteredName = window.prompt(promptLabel, defaultName);

  if (!enteredName) return;

  const name = enteredName.trim();
  if (!name) return;

  const newItem = {
    name,
    type: type === 'folder' ? 'folder' : 'text',
    size: '0KB',
    modified: new Date().toISOString().slice(0, 10),
  };

  explorerItems.push(newItem);
  renderItems(explorerItems);

  const newIndex = explorerItems.length - 1;
  const newElement = fileList.children[newIndex];
  if (newElement) {
    selectItem(newElement, explorerItems[newIndex], newIndex);
  }
}

function createIcon(type) {
  switch (type) {
    case 'text':
      return '📄';
    case 'image':
      return '🖼️';
    case 'document':
      return '📑';
    case 'folder':
    default:
      return '📁';
  }
}

newFolderBtn.addEventListener('click', () => createItem('folder'));
newFileBtn.addEventListener('click', () => createItem('file'));

renderItems(explorerItems);
if (explorerItems.length) {
  selectItem(fileList.firstElementChild, explorerItems[0], 0);
}
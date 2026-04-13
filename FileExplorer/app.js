console.log('App is running');
import data from './data.js';

const fileList = document.getElementById('file-list');

// Populate file list
data.files.forEach(file => {
    const fileItem = document.createElement('div');
    fileItem.addEventListener('click', () => {
        // renderItem(fileItem);
    });
    fileItem.addEventListener('mouseover', () => {
        fileItem.style.backgroundColor = '#f0f0f0';
    });
    fileItem.addEventListener('mouseout', () => {
        fileItem.style.backgroundColor = '';
    }); 
    fileItem.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        createItem(fileItem);
    });
    fileItem.className = 'file-item';
    fileItem.textContent = `${createIcon(file.type)} ${file.name}`;
    fileList.appendChild(fileItem);
});   

// Function to create a folder item when a file is clicked
function createItem(fileItem) {
    const folderItemInput = document.createElement('input');
    fileItem.appendChild(folderItemInput);
    folderItemInput.type = 'text';
    folderItemInput.placeholder = 'Enter folder name';
    folderItemInput.addEventListener('mouseover', () => {
        folderItemInput.style.backgroundColor = '#f0f0f0';
    });
    folderItemInput.addEventListener('mouseout', () => {
        folderItemInput.style.backgroundColor = '';
        const inputText = folderItemInput.value.trim();
        folderItemInput.remove();
        if (inputText) {
            const folderItem = document.createElement('div');
            folderItem.className = 'folder-item';
            const iconType = inputText.split('.')[1] || 'folder';
            folderItem.textContent = `${createIcon(iconType)}  ${inputText}`;
            fileItem.appendChild(folderItem);
        }
    });
}

//  Function to create an icon based on file type
function createIcon(type) {
    switch(type) {
        case 'text':
            return '📄';
        case 'image':
            return '🖼️';
        case 'document':
            return '📑';
        default:
            return '📁';
    }
}
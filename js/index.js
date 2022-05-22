import { blockHandler } from './blockHandler.js' ;
import { buttonHandler } from './buttonHandler.js' ; 

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');

button1.addEventListener('click', () => blockHandler(1));
button1.addEventListener('click', () => buttonHandler(1));

button2.addEventListener('click', () => blockHandler(2));
button2.addEventListener('click', () => buttonHandler(2));

button3.addEventListener('click', () => blockHandler(3));
button3.addEventListener('click', () => buttonHandler(3));

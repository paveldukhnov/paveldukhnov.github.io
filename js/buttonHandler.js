export function buttonHandler(buttonNumber) { 
  const button1 = document.getElementById('button1');  
  const button2 = document.getElementById('button2');
  const button3 = document.getElementById('button3');

  switch(buttonNumber) {
    case 1:
      button1.classList.remove('button-disabled');
      button2.classList.add('button-disabled');
      button3.classList.add('button-disabled');
      break;
  
    case 2:  
      button1.classList.add('button-disabled');
      button2.classList.remove('button-disabled');
      button3.classList.add('button-disabled');
      break;
  
    case 3:  
      button1.classList.add('button-disabled');
      button2.classList.add('button-disabled');
      button3.classList.remove('button-disabled');
      break;
  }
}

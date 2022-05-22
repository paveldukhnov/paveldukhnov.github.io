export function blockHandler(blockNumber) {
  const block1 = document.getElementById('block1');  
  const block2 = document.getElementById('block2');
  const block3 = document.getElementById('block3');
  
  switch(blockNumber) {
    case 1:  
      block1.classList.remove('disabled');   
      block2.classList.add('disabled');
      block3.classList.add('disabled');
      break;
  
    case 2:  
      block1.classList.add('disabled');   
      block2.classList.remove('disabled');
      block3.classList.add('disabled');
      break;
  
    case 3:  
      block1.classList.add('disabled');   
      block2.classList.add('disabled');
      block3.classList.remove('disabled');
      break;
  } 
}

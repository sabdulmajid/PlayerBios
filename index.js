const playerChoose = document.querySelector('select');
const bioDisplay = document.querySelector('pre');

playerChoose.onchange = function() {
  const info = playerChoose.value;
  updateDisplay(info);
};

function updateDisplay(info) {
  info = info.replace(" ", "");
  info = info.toLowerCase();
  let url = info + '.txt';
  
  // Creating the XMLHttpRequest 
  let request = new XMLHttpRequest();
  request.open('GET', url);
  request.responseType = 'text';
  request.onload = function() {
    bioDisplay.textContent = request.response;
  };
  
  request.send();
};


playerChoose.value = 'Choose a player';
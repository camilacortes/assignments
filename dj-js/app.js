let button = document.getElementById('button');

button.addEventListener('mouseenter', function(e) {
  button.style.backgroundColor = 'blue';
});

window.addEventListener('keydown', function(e) {
  let x = event.key;
  if (x === 'b') {
    button.style.backgroundColor = 'blue';
  }
});

button.addEventListener('click', function(e) {
  button.style.backgroundColor = 'red';
});

window.addEventListener('keydown', function(e) {
  let x = event.key;
  if (x === 'r') {
    button.style.backgroundColor = 'red';
  }
});

button.addEventListener('mouseout', function(e) {
  button.style.backgroundColor = 'yellow';
});

window.addEventListener('keydown', function(e) {
  let x = event.key;
  if (x === 'y') {
    button.style.backgroundColor = 'yellow';
  }
});

button.addEventListener('dblclick', function(e) {
  button.style.backgroundColor = 'green';
});

window.addEventListener('keydown', function(e) {
  let x = event.key;
  if (x === 'g') {
    button.style.backgroundColor = 'green';
  }
});

// scrolling

window.addEventListener('wheel', function(e) {
  button.style.backgroundColor = 'orange';
});

window.addEventListener('keydown', function(e) {
  let x = event.key;
  if (x === 'o') {
    button.style.backgroundColor = 'orange';
  }
});

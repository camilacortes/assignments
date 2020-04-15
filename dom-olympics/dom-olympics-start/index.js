const h1 = document.createElement('h1');
h1.textContent = 'Javascript made this!';
h1.className = 'header';

document.getElementById('header').appendChild(h1);

const subTitle = document.createElement('p');
subTitle.innerHTML = "<span class ='name'> Camila </span> wrote the Javascript";

document.getElementById('header').appendChild(subTitle);

// clear btton

var clearBtn = document.getElementById('clear-button');

const messages = document.getElementsByClassName('message');

messages[0].textContent = 'you are awesome!';
messages[1].textContent = 'I like your hair';
messages[2].textContent = 'thanks!';
messages[3].textContent = 'of course!';

clearBtn.addEventListener('click', function(e) {
  for (var i = 0; i < messages.length; i++) {
    messages[i].textContent = '';
  }
});

//option bar

var dropdown = document.getElementById('theme-drop-down');

var messageLft = document.getElementsByClassName('message left');

var messageRight = document.getElementsByClassName('message right');

dropdown.addEventListener('change', function(e) {
  console.log(this.value);
  if (this.value === 'theme-two') {
    messageLft[0].style.backgroundColor = 'red';
    messageLft[1].style.backgroundColor = 'red';
    messageRight[0].style.backgroundColor = 'grey';
    messageRight[1].style.backgroundColor = 'grey';
  }
});

// send messages

var userInput = document.getElementById('input').value;

// console.log(userInput);

var sendBtn = document.querySelector(' form button');

// console.log(sendBtn);

var newMessage = document.createElement('div');

sendBtn.addEventListener('click', function(e) {
  newMessage.textContent = userInput;
  newMessage.className = 'right';
  document.getElementById('main').appendChild(newMessage);
});



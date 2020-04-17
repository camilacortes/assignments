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
    for (let i = 0; i < messageLft.length; i++) {
      messageLft[i].style.backgroundColor = 'red';
      messageRight[i].style.backgroundColor = 'grey';
    }
  }
});

// send messages GOLD

const userInput = message.input.value;
const sendBtn = document.getElementById('send');
console.log(messages);

sendBtn.addEventListener('click', function(event) {
  // i want to add a new message to messageRight.
  var newDiv = document.createElement('div');
  newDiv.className = 'message right';
  newDiv.textContent = userInput;
});

const keys = document.querySelectorAll('.letter');
const input = document.getElementById('myInput');

let isCapsLockOn = false;
const backspaceKey = document.getElementById('Backspace');

backspaceKey.addEventListener('click', () => {
input.value = input.value.slice(0, -1);
});

keys.forEach(key => {
  key.addEventListener('mousedown', event => {
    event.preventDefault();
    if (key.dataset.key === 'capslock') {
      isCapsLockOn = !isCapsLockOn;
      toggleCapsLock();
      alert(`Caps Lock is ${isCapsLockOn ? 'On' : 'Off'}`);
    } else {
      input.value += getCharacter(key.dataset.key);
    }
  });
});

function getCharacter(keyValue) {
  if (isCapsLockOn) {
    return keyValue.toUpperCase();
  } else {
    return keyValue.toLowerCase();
  }
}

function toggleCapsLock() {
  const capsLockKey = document.querySelector('.letter[data-key="capslock"]');
  if (isCapsLockOn) {
    capsLockKey.classList.add('active');
  } else {
    capsLockKey.classList.remove('active');
  }
}

input.addEventListener('keydown', event => {
  if (event.key.toLowerCase() === 'capslock') {
    event.preventDefault();
    console.log(event)
  }
});
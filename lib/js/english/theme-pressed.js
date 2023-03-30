const divMapping = {
  "F1": "F1",
  "F2": "F2",
  "F3": "F3",
  "F4": "F4",
  "F5": "F5",
  "F6": "F6",
  "F7": "F7",
  "F8": "F8",
  "F9": "F9",
  "F10": "F10",
  "F11": "F11",
  "F12": "F12",
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7",
  "8": "8",
  "9": "9",
  "0": "0",
  "-": "-",
  "=": "=",
  "Backspace": "Backspace",
  "`": "`",
  "~": "`",
  "Tab": "Tab",
  "Escape": "Esc",
  "q": "Q",
  "Q": "Q",
  "w": "W",
  "W": "W",
  "e": "E",
  "r": "R",
  "R": "R",
  "t": "T",
  "T": "T",
  "u": "U",
  "U": "U",
  "i": "I",
  "I": "I",
  "o": "O",
  "O": "O",
  "p": "P",
  "P": "P",
  "[": "[",
  "]": "]",
  "{": "[",
  "}": "]",
  "Enter": "Enter",
  "y": "Y",
  "CapsLock": "capslock",
  "a": "A",
  "A": "A",
  "S": "S",

  "s": "S",
  "d": "D",
  "D": "D",
  "f": "F",
  "F": "F",
  "g": "G",
  "G": "G",
  "h": "H",
  "H": "H",
  "j": "J",
  "J": "J",
  "k": "K",
  "K": "K",
  "l": "L",
  "L": "L",
  ";": ";",
  ":": ";",
  "ç": ";",
  "Ç": ";",
  ",": ",",
  "<": ",",
  ">": ">",
  ".": ">",
  '"': "'",
  "'": "'",
  "^": "'",
  "~": "'",
  "|": "|",
  "\u005c": "|",
  "Shift": "",
  "z": "Z",
  "Z": "Z",
  "x": "X",
  "X": "X",
  "c": "C",
  "C": "C",
  "v": "V",
  "V": "V",
  "b": "B",
  "B": "B",
  "n": "N",
  "N": "N",
  "m": "M",
  "M": "M",
  "?": "?",
  "\u002F": "?",
  "Shift": "Shift",
  "Shift": "Shift",
  "Control": "Control",
  "Control": "Control2",
  "Alt": "Alt",
  "Alt": "Alt2",
  "Shift": "Shift2",
  "Meta": "win",
  "Fn": "fn",
  " ": "space",
};

document.addEventListener("keydown", function (event) {
  const divSelector = divMapping[event.key];
  if (divSelector) {
    const div = document.getElementById(divSelector);
    div.classList.add("pressed");
  }
  // condição para ativar ambas as divs do control
  if (event.key === "Control") {
    const div1 = document.getElementById("Control");
    const div2 = document.getElementById("Control2");
    div1.classList.add("pressed");
    div2.classList.add("pressed");
  }

  // condição para ativar ambas as divs do shift
  if (event.key === "Shift") {
    const div1 = document.getElementById("Shift");
    const div2 = document.getElementById("Shift2");
    div1.classList.add("pressed");
    div2.classList.add("pressed");
  }

  // condição para ativar ambas as divs do alt
  if (event.key === "Alt") {
    const div1 = document.getElementById("Alt");
    const div2 = document.getElementById("Alt2");
    div1.classList.add("pressed");
    div2.classList.add("pressed");
  }
});

document.addEventListener("keyup", function (event) {
  const divSelector = divMapping[event.key];
  if (divSelector) {
    const div = document.getElementById(divSelector);
    div.classList.remove("pressed");
  }

  // condição para desativar ambas as divs do control
  if (event.key === "Control") {
    const div1 = document.getElementById("Control");
    const div2 = document.getElementById("Control2");
    div1.classList.remove("pressed");
    div2.classList.remove("pressed");
  }

  // condição para desativar ambas as divs do shift
  if (event.key === "Shift") {
    const div1 = document.getElementById("Shift");
    const div2 = document.getElementById("Shift2");
    div1.classList.remove("pressed");
    div2.classList.remove("pressed");
  }

  // condição para desativar ambas as divs do alt
  if (event.key === "Alt") {
    const div1 = document.getElementById("Alt");
    const div2 = document.getElementById("Alt2");
    div1.classList.remove("pressed");
    div2.classList.remove("pressed");
  }
});
document.addEventListener("keyup", function (event) {
  const divSelector = divMapping[event.key];
  if (divSelector) {
    const div = document.getElementById(divSelector);
    div.classList.remove("pressed");
  }
});

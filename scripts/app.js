
// receives message from Unity on app start for UI setup
function FromUnity_ApplicationStarted(s) {
  // Use these titles for the buttons. The key is the string sent from Unity for button label
  let titles = {
    "OP": "Occipito-posterior",
    "OA": "Occipito-anterior",
    "ROT": "Right occipito-transverse",
    "LOT": "Left occipito-transverse",
    "ROA": "Right occipito-anterior",
    "LOP": "Left occipito-posterior",
    "LOT": "Left occipito-transverse",
    "ROP": "Right occipito-posterior",
  }

  console.log("FromUnity_ApplicationStarted", s);
  // expects a comma separated string for the button labels
  var strArray = s.split(",");

  // create buttons
  var nav = document.querySelector(".nav");
  if (nav) {
    for (let i = 0; i < strArray.length; i++) {
      let label = strArray[i];
      let title = titles[label]? titles[label] : ""; console.log("title", titles[label], title, label);
      let button = CreateButton(label, i, title);
      nav.appendChild(button);

      if (i==0){
        // default selects the first button
        SetPos(i, button);
      }
    }
  }
}
function CreateButton(btnLabel, pos, title = "") {
  var button = document.createElement("button");
  button.innerHTML = btnLabel;
  button.title = title;
  button.onclick = function () {
    SetPos(pos, this);
  };
  return button;
}

// button handler - sends message to Unity
function SetPos(pos, elem) {
  var button = elem;
  unityinstance.SendMessage("MainCamera", "SelectionChange", pos);

  // remove selected class from all buttons
  var buttons = document.querySelectorAll(".nav button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("selected");
  }
  // add selected class to the clicked button
  if (button) {
    button.classList.add("selected");
  }

  // set the currentPos label to button title
  var currentPos = document.getElementById("currentPos");
  if (currentPos && button.title) {
    currentPos.innerHTML = button.title;
  }
}

function FromUnity(s) {
  console.log("FromUnity: " + s);
}

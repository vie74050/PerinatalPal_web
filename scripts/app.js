
// receives message from Unity on app start for UI setup
function FromUnity_ApplicationStarted(s) {
  console.log("FromUnity_ApplicationStarted", s);
  // expects a comma separated string for the button labels
  var strArray = s.split(",");

  // create buttons
  var nav = document.querySelector(".nav");
  if (nav) {
    for (var i = 0; i < strArray.length; i++) {
      var button = CreateButton(strArray[i], i);
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

operator_buttons = document.getElementsByClassName("operator");
for (var i = 0; i < operator_buttons.length; i++) {
  operator_buttons[i].addEventListener('click', function(event) {
    console.log(event);
  });
}

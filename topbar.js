const fontBlueColor = "#3168c8";
const defaultFontColor = "black";

function handleTopBarIconEnter(id) {
  const button = document.getElementById(id + "-button");
  const icon = document.getElementById(id + "-icon");

  button.style.color = fontBlueColor;
  icon.style.color = fontBlueColor;
}

function handleTopBarIconLeave(id) {
  const button = document.getElementById(id + "-button");
  const icon = document.getElementById(id + "-icon");

  button.style.color = defaultFontColor;
  icon.style.color = defaultFontColor;
}

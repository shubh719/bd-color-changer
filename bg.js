function red() {
  document.getElementById("body").style.backgroundColor = "red";
}
function yellow() {
  document.getElementById("body").style.backgroundColor = "yellow";
}
function blue() {
  document.getElementById("body").style.backgroundColor = "blue";
}
function green() {
  document.getElementById("body").style.backgroundColor = "green";
}
function white() {
  document.getElementById("body").style.backgroundColor = "white";
}
function addEl() {
  let colorName = document.getElementById("ci");
  let a = colorName.value;
  let newButton = document.createElement("button");
  newButton.setAttribute("id", "a");
  newButton.setAttribute("class", "one");
  newButton.setAttribute(
    "onclick",
    `document.getElementById('body').style.backgroundColor = '${a}';`
  );
  newButton.innerHTML = a;
  newButton.style.backgroundColor = a;
  newButton.style.opacity = 0.5;
  newButton.style.transition = "0.3s";
  newButton.addEventListener("mouseover", () => {
    newButton.style.opacity = 1;
    newButton.style.border = "2px solid black";
    newButton.style.height = "55px";
    newButton.style.width = "105px";
  });
  newButton.addEventListener("mouseout", () => {
    newButton.style.opacity = 0.5;
    newButton.style.border = "none";
    newButton.style.height = "50px";
    newButton.style.width = "100px";
  });

  let container = document.querySelector(".container").append(newButton);
  console.log(a);
}

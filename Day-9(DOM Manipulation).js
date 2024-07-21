// Activity 1: Selecting and Manipulating Elements
// Task 1:
const MyName = document.getElementById("name");
MyName.innerHTML = "Harsh";

// Task 2:
const box = document.getElementsByClassName("box");
const button = document.getElementById("clickMe");
button.addEventListener("click", function () {
  box[0].style.backgroundColor = "red"; // box[1] represents the div that is the first element of same class "box"
  box[1].style.backgroundColor = "red"; // box[1] represents the new div that is the second element of same class "box"
  image.setAttribute("src", "/java.jfif"); // change image by clicking the button
  boxes.removeChild(boxes.querySelector(".kid:last-child"));
});

// Activity 2: Creating and Appending Elements
// Task 3:
const box2 = document.createElement("div");
box2.className = "box";
box2.appendChild(document.createTextNode("You"));
document.body.appendChild(box2);

// Task 4:
const list = document.getElementById("List");
const extraLi = document.createElement("li");
extraLi.appendChild(document.createTextNode("Code"));
list.appendChild(extraLi);

// Activity 3: Removing Elements
// Task 5:
MyName.remove(); // removed H1

// Task 6:
const boxes = document.getElementById("parentDiv");
// removed the last div with class "kid"

// Activity 4: Modifying Attributes and Classes
// Task 7:
const image = document.querySelector("img");
// image.setAttribute("src", "/java.jfif"); it is declared in the button function

// Task 8:

const removeClass = document.getElementById("removeClass");
removeClass.classList.remove("box");

const addClass = document.getElementById("add");
addClass.classList.add("box");

// Activity 5: Event Handling
// Task 9:
const paraButton = document.getElementById("paragraphButton");
const para = document.querySelector("p");
paraButton.addEventListener("click", () => {
  para.innerHTML = "Content Changed";
});

// Task 10:
button.addEventListener("mouseover", () => {
  button.style.border = "4px solid black";
});
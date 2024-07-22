// Wrap all the code in a DOMContentLoaded event listener to ensure the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Activity 1 : Basic Event Handling
    // Task 1: Add a click event listener to a button that changes the text content of a paragraph.
    const paraButton = document.getElementById("paragraphButton");
    const para = document.querySelector("p");
    if (paraButton && para) {
      paraButton.addEventListener("click", () => {
        para.textContent = "Content Changed";
      });
    }
  
    // Task 2: Add a double-click event listener to an image that toggles its visibility.
    const imagee = document.querySelector("img");
    if (paraButton && imagee) {
      paraButton.addEventListener("dblclick", () => {
        imagee.style.display = imagee.style.display === "none" ? "" : "none";
      });
    }
  
    // Activity 2: Mouse Events
    // Task 3: Add a mouseover event listener to an element that changes its background color.
    const button = document.getElementById("clickMe");
    if (button) {
      button.addEventListener("mouseover", () => {
        button.style.backgroundColor = "blue";
      });
  
      //Task 4: Add a mouseout event listener to an element that resets its background color.
      button.addEventListener("mouseout", () => {
        button.style.backgroundColor = "";
      });
    }
  
    //Activity 3: Keyboard Events
    // Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
    const inputField = document.getElementById("MyInput");
    if (inputField) {
      inputField.addEventListener("keydown", function (event) {
        console.log("Key pressed: " + event.key);
      });
  
      // Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
      inputField.addEventListener("keyup", function () {
        if (para) {
          para.textContent = inputField.value;
        }
      });
    }
  
    // Activity 4: Form Events
    // Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
    const formD = document.getElementById("myForm");
    if (formD) {
      formD.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission
  
        const formData = new FormData(this);
  
        for (let [key, value] of formData.entries()) {
          console.log(`${key}: ${value}`);
        }
      });
    }
  
    // Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
    const select = document.getElementById("colorSelect");
    const selectedColor = document.getElementById("selectedColor");
    if (select && selectedColor) {
      select.addEventListener("change", function () {
        selectedColor.textContent = this.value;
      });
    }
  
    // Activity 5: Event Delegation
    //Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
    const fruitList = document.getElementById("List");
    if (fruitList) {
      fruitList.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
          console.log("Clicked fruit:", event.target.textContent);
        }
      });
    }
  
    // Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
    const addItemButton = document.getElementById("addItem");
    const itemList = document.getElementById("itemList");
    let itemCount = 0;
  
    if (addItemButton && itemList) {
      addItemButton.addEventListener("click", function () {
        itemCount++;
        const li = document.createElement("li");
        li.textContent = `Item ${itemCount}`;
        itemList.appendChild(li);
      });
  
      itemList.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
          event.target.classList.toggle("highlight");
          console.log("Clicked:", event.target.textContent);
        }
      });
    }
  });
// Visit page and look for “What you'll learn” section.
// The section consists of a list of information on what you will be learning in the course. You are required to write
// a JavaScript program that stores a pre-existing array of list items. On each button click, the program should
// add a new list item in sequential order. The program should verify if any remaining items are available in the list
// item array and add the next item to the list accordingly. If no items are left, the function should display a
// message indicating that all items have been added.



const listContainer = document.querySelector("#list-Output");
const addItemBtn = document.querySelector("#listBtn");
const addRemove = document.querySelector("#removeBTn");
const addClearBtn = document.querySelector("#clearBtn");

let currListItemIndex = 0;

const audio = new Audio("./voice.mp3")

addItemBtn.addEventListener("click", () => {
    if (currListItemIndex < my_array.length) {
        const newList = document.createElement("li")
        newList.textContent = my_array[currListItemIndex]
        listContainer.appendChild(newList)
        currListItemIndex++;
    } else {
        audio.play()
        alert("all items have been aaded ,\n in the provided list !!")
    }
});

addRemove.addEventListener("click", () => {
    if (currListItemIndex > 0) {
        // currListItemIndex++;
        listContainer.removeChild(listContainer.lastChild)
    }
});

addClearBtn.addEventListener("click", () => {
    while (listContainer.firstChild) {
        listContainer.removeChild(listContainer.firstChild)
    }
    currListItemIndex = 0;
})



my_array = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elephant",
  "frog",
  "grape",
  "hat",
  "igloo",
  "jacket",
  "kite",
  "lemon",
  "melon",
  "orange",
  "pear",
  "quilt",
  "rabbit",
  "strawberry",
  "turtle",
  "umbrella",
];

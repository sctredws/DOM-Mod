// Use selector method to get all elements in html
const pageHead = document.getElementById("page-header");
const mainHead = document.getElementById("main-heading");
const para1 = document.getElementById("para1");
const para2 = document.getElementById("para2");
const btn = document.getElementById("btn");
const para4 = document.getElementById("para4");
const red = document.getElementById("red");
const blue = document.getElementById("blue");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");
const black = document.getElementById("black");



// Change H1 text
mainHead.textContent = "New DOM Layout";

// Add classList "bg-success"
let header = document.querySelector("#page-header");
header.classList.remove("bg-dark");
header.classList.add("bg-success");

//Add para 1 and 2 text 
para1.textContent = "The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure.";

para2.textContent = "The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page."

// click event

document.getElementById("btn").addEventListener("click", function() {
document.getElementById("para4").innerHTML = "The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.";
});


// change box colors

let div = document.querySelector("#red");
div.classList.replace("bg-white", "bg-danger");

let div2 = document.querySelector("#blue");
div2.classList.replace("bg-white", "bg-primary");

let div3 = document.querySelector("#yellow");
div3.classList.replace("bg-white", "bg-warning");

let div4 = document.querySelector("#green");
div4.classList.replace("bg-white", "bg-success");

let div5 = document.querySelector("#black");
div5.classList.replace("bg-white", "bg-dark");
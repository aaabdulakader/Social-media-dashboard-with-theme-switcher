"use strict";

const toggle = document.querySelector(".toggle");
const body = document.querySelector("body");
toggle.addEventListener("click", function () {
  body.classList.toggle("light");
});

//Populating cards
let followers = document.querySelectorAll(".num-of-followers");
let interacts = document.querySelectorAll(".num-of-interact");

let Elements = [...followers, ...interacts];
let arr = [1987, 1044, "11k", 8239, 87, 52, 5462, "52k", 117, 507, 107, 1407];

for (let i = 0; i < arr.length; i++) {
  Elements[i].textContent = arr[i];
}

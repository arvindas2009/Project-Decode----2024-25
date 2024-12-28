const dropdown1 = document.getElementsByClassName("dropdown-1");
const dropdown2 = document.getElementsByClassName("dropdown-2");
const bookleft = document.querySelector(".book-1");
const bookright = document.querySelector(".book-2");
const form1 = document.querySelector(".form-1");
const form2 = document.querySelector(".form-2");

dropdown1[0].addEventListener("click", () => {
  bookleft.classList.toggle("opened");
  bookleft.classList.toggle("closed");
  dropdown1[0].classList.toggle("drop-open");
  dropdown1[0].classList.toggle("drop-closed");
  form1.classList.toggle("form-hide");
});
dropdown2[0].addEventListener("click", () => {
  bookright.classList.toggle("opened");
  bookright.classList.toggle("closed");
  dropdown2[0].classList.toggle("drop-open");
  dropdown2[0].classList.toggle("drop-closed");
  form2.classList.toggle("form-hide");
});

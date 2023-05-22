 /*Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. На модальном вікні повинен бути текст і кнопка "Закрити". Спочатку модальне вікно не відображається. При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає.*/

const modals = document.querySelectorAll(".modal");
const openModal = document.querySelector(".open-modal");
const closeModal = document.querySelector(".close-modal");

function open() {
  modals.forEach((modal) => {
    modal.style.display = "block";
  });
  openModal.classList.add("hidden");
}
function close() {
  modals.forEach((modal) => {
    modal.style.display = "none";
  });
  openModal.classList.remove("hidden");
}
openModal.addEventListener("click", open);
closeModal.addEventListener("click", close);
 


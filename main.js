const list = document.querySelector(".list");
const burger = document.querySelector(".burger");
burger.addEventListener("click", showList);
function showList() {
  list.classList.toggle("active-nav-list");
}

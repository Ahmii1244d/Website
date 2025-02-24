const btn = document.getElementById("mb-btn");
const menu = document.querySelector(".sidebar");

btn.addEventListener("click", () => {
  menu.style.display = "block";
  btn.style.display = "none";
  menu.style.position = "relative";
  menu.style.zIndex = "1000";
  menu.style.width = "100%";
  menu.style.height = "100vh";
  menu.style.backgroundColor = "white";
  menu.style.top = "-250px";
  menu.style.left = "750px";
});
const exit = document.querySelector(".close");
exit.addEventListener("click", () => {
  menu.style.display = "none";
  if (window.innerWidth > 450) {
    btn.style.display = "block";
  }
});

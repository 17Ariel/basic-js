const active = (e) => {
  let anchor = document.querySelectorAll("a");

  for (let key = 0; key < anchor.length; key++) {
    if (anchor) {
      anchor[key].classList.remove("active");
    }
    e.target.classList.add("active");
  }
};

let item = document.querySelectorAll("a");
for (let i = 0; i < item.length; i++) {
  item[i].addEventListener("click", active);
}

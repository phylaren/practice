const input = document.querySelector("input");
const btn = document.querySelector("button");
const list = document.querySelector("ul");

btn.addEventListener("click", () => {
  let item = document.createElement("li");
  
  input.focus();
  item.textContent = input.value;
  input.value = "";

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "delete";
  deleteBtn.addEventListener("click", () => item.remove());
  item.appendChild(deleteBtn);
  
  list.appendChild(item);
});
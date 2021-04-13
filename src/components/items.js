const TRASH_CAN_URL =
  "https://www.flaticon.com/svg/vstatic/svg/1345/1345925.svg?token=exp=1618335381~hmac=1a95e4ec6143975804387bd9cdf67e32";

const itemListContainer = document.getElementById("item-list");

function createTodoItem(name, checked) {
  const container = document.createElement("div");
  container.classList.add("todo-item");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = checked;
  const text = document.createElement("p");
  text.innerText = name;
  const remove = document.createElement("img");
  remove.src = TRASH_CAN_URL;
  remove.classList.add("remove-button");

  container.appendChild(checkbox);
  container.appendChild(text);
  container.appendChild(remove);

  return container;
}

export function createTodoItemList(todoList) {
  itemListContainer.innerHTML = "";

  for (const itemData of todoList) {
    const itemHtmlRef = createTodoItem(itemData.item, itemData.checked);
    itemListContainer.appendChild(itemHtmlRef);
  }
}

import { createUserData, getTodoData, updateUserData } from "./utils/api";

console.log("To Do App");

const ADD_NEW_USER_URL = "https://simple-json-server-scit.herokuapp.com/todo";
const UPDATE_TO_USER_URL =
  "https://simple-json-server-scit.herokuapp.com/todo/mardelean";

const inputTask = document.getElementById("task-name");

let todo = [];
let userExist = false;

getTodoData((json) => {
  console.log(json);
  if (json.id === "mardelean") {
    todo = json.todo;
    userExist = true;
  }
});

document.getElementById("add-task-button").addEventListener("click", () => {
  if (userExist) {
    // update user data
    console.log("add task to todo list");
    const itemValue = inputTask.value;
    if (itemValue) {
      console.log(todo);
      todo.push({
        checked: false,
        item: itemValue,
      });
      updateUserData(todo, () => {});
    }
  } else {
    // add user to server
    const itemValue = inputTask.value;
    if (itemValue) {
      createUserData(itemValue, () => {});
    }
  }
});

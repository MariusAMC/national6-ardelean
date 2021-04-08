import { renderArticles } from "./article";
import { getApiPostData } from "./utils/api";

console.log("JavaScript - AJAX");

document.getElementById("get-data").addEventListener("click", function () {
  getApiPostData(renderArticles);
});

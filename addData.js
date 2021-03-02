console.log("JavaScript AJAX");
console.log("CRUD Operation - Create")

document
.getElementById("add-article-button")
.addEventListener("click", function () {

        const articleTitle = document.getElementById("article-title").value;
    console.log("articleTitle", articleTitle);
    const articleContent = document.getElementById("article-content").value;
    console.log("articleContent", articleContent);

    if (articleTitle && articleContent) {

    const payLoad = {
        title: articleTitle,
        content: articleContent
    };

    console.log("payLoad", payLoad)
    console.log("payLoad Text", JSON.stringify(payLoad));

    fetch("https://simple-json-server-scit.herokuapp.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payLoad), // body data type must match "Content-Type" header
      }).then(getData)
  
    }
  
});

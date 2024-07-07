const webParent = document.querySelector(".skola .weby");

fetch('/scripts/json/data.json')  
  .then((response) => response.json())
  .then((json) => renderWebs(json.skola));

function renderWebs(webData) {
  webData.forEach(data => {
    const newWeb = webParent.querySelector(".webDef").cloneNode(true);
    newWeb.classList = "web";
    //
    newWeb.querySelector("img").src = "images/skola/"+data.image;
    newWeb.querySelector("h1").innerHTML = data.name;
    newWeb.querySelector("a").href = "skola/"+data.folder;
    //
    webParent.appendChild(newWeb, webParent.children[webParent.children.length]);
  });
  //resize_sin();
}
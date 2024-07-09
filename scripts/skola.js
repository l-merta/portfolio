const webParentSkola = document.querySelector(".skola .weby");

fetch('scripts/json/data.json')  
  .then((response) => response.json())
  .then((json) => renderWebsSkola(json.skola));

function renderWebsSkola(webData) {
  webData.forEach(data => {
    const newWeb = webParentSkola.querySelector(".webDef").cloneNode(true);
    newWeb.classList = "web";
    //
    newWeb.querySelector("img").src = "images/skola/"+data.image;
    newWeb.querySelector("h1").innerHTML = data.name;
    newWeb.querySelector("a").href = "skola/"+data.folder;
    //
    webParentSkola.appendChild(newWeb, webParentSkola.children[webParentSkola.children.length]);
  });
  //resize_sin();
}
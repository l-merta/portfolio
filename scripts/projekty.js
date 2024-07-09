const webParentProjekty = document.querySelector(".projekty .weby");

fetch('scripts/json/data.json')  
  .then((response) => response.json())
  .then((json) => renderWebsProjekty(json.projekty));

function renderWebsProjekty(webData) {
  console.log(webData);
  webData.forEach(data => {
    const newWeb = webParentProjekty.querySelector(".webDef").cloneNode(true);
    newWeb.classList = "web";
    //
    newWeb.querySelector("img").src = "images/projekty/"+data.image;
    newWeb.querySelector("h1").innerHTML = data.name;
    newWeb.querySelector("p").innerHTML = data.popis;
    if(data.link.length > 0)
      newWeb.querySelector(".linkCont a").href = data.link;
    else
      newWeb.querySelector(".linkCont").classList.add("linkCont-inactive")

    const techParent = newWeb.querySelector(".s2");
    const tech = data.tech;
    tech.forEach(t => {
      const newTech = techParent.querySelector(".techDef").cloneNode(true);
      newTech.classList = "tech";
      newTech.setAttribute("title", t.name);
      newTech.querySelector("img").src = "images/icons/"+t.icon;
      techParent.appendChild(newTech, techParent.children[techParent.children.length]);
    });
    //
    webParentProjekty.appendChild(newWeb, webParentProjekty.children[webParentProjekty.children.length]);
  });
  //resize_sin();
}
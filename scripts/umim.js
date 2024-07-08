const techCont = document.querySelector(".umim .cont");

fetch('scripts/json/data.json')  
  .then((response) => response.json())
  .then((json) => renderTech(json.tech));

function renderTech(tech) {
  for(let i = 0; i < tech.length; i++) {
    const nTech = techCont.querySelector(".tech-def").cloneNode(true);
    nTech.classList = "tech";
    //nTech.querySelector("i").classList = tech[i].icon;
    //nTech.querySelector("i").style = "color: " + tech[i].color + ";";
    nTech.querySelector(".icon").src = "images/icons/"+tech[i].icon;
    nTech.querySelector(".name").innerHTML = tech[i].name;
    nTech.querySelector(".percent span").innerHTML = tech[i].percent + "%";
    if(tech[i].percent > 0) {
      nTech.addEventListener("mouseover", () => {
        nTech.querySelector(".hladina").style = "height: " + tech[i].percent + "%;";
        nTech.querySelector(".percent").style = "opacity: 1;";
      });
      nTech.addEventListener("mouseout", () => {
        nTech.querySelector(".hladina").style = "height: 0%";
        nTech.querySelector(".percent").style = "opacity: 0;";
      });
    }
    techCont.appendChild(nTech, techCont.children[techCont.children.length]);
  }
}
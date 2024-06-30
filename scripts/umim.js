//const umim = document.querySelector(".umim");
const techCont = document.querySelector(".umim .cont");
const tech = [
  {
    icon: "html.png",
    name: "HTML",
    percent: 80,
    color: "rgb(235, 66, 0)"
  },
  {
    icon: "css.png",
    name: "CSS",
    percent: 80,
    color: "rgb(0, 129, 235)"
  },
  {
    icon: "js.png",
    name: "JS",
    percent: 50,
    color: "rgb(230, 214, 0)"
  },
  {
    icon: "php.png",
    name: "PHP",
    percent: 30,
    color: "rgb(98, 85, 133)"
  },
  {
    icon: "csh.png",
    name: "C#",
    percent: 30,
    color: "rgb(98, 85, 133)"
  },
  {
    icon: "photoshop.png",
    name: "Photoshop",
    percent: 20,
    color: "rgb(98, 85, 133)"
  },
  {
    icon: "blender.png",
    name: "Blender",
    percent: 20,
    color: "rgb(98, 85, 133)"
  },
  {
    icon: "unity.png",
    name: "Unity",
    percent: 0,
    color: "rgb(98, 85, 133)"
  },
  {
    icon: "github.png",
    name: "Github",
    percent: 0,
    color: "rgb(98, 85, 133)"
  }
];

for(let i = 0; i < tech.length; i++) {
  const nTech = techCont.querySelector(".tech-def").cloneNode(true);
  nTech.classList = "tech";
  //nTech.querySelector("i").classList = tech[i].icon;
  //nTech.querySelector("i").style = "color: " + tech[i].color + ";";
  nTech.querySelector(".icon").src = "images/"+tech[i].icon;
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
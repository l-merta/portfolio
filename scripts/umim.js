//const umim = document.querySelector(".umim");
const techCont = document.querySelector(".umim .cont");
const tech = [
  {
    icon: "fa-brands fa-html5",
    name: "HTML",
    percent: 80,
    color: "rgb(235, 66, 0)"
  },
  {
    icon: "fa-brands fa-css3-alt",
    name: "CSS",
    percent: 80,
    color: "rgb(0, 129, 235)"
  },
  {
    icon: "fa-brands fa-js",
    name: "JS",
    percent: 50,
    color: "rgb(230, 214, 0)"
  },
  {
    icon: "fa-brands fa-php",
    name: "PHP",
    percent: 30,
    color: "rgb(98, 85, 133)"
  }
];

for(let i = 0; i < tech.length; i++) {
  const nTech = techCont.querySelector(".tech-def").cloneNode(true);
  nTech.classList = "tech";
  nTech.querySelector("i").classList = tech[i].icon;
  nTech.querySelector("i").style = "color: " + tech[i].color + ";";
  nTech.querySelector(".name").innerHTML = tech[i].name;
  nTech.querySelector(".percent span").innerHTML = tech[i].percent + "%";
  nTech.addEventListener("mouseover", () => {
    nTech.querySelector(".hladina").style = "height: " + tech[i].percent + "%;";
  });
  nTech.addEventListener("mouseout", () => {
    nTech.querySelector(".hladina").style = "height: 0%";
  });
  techCont.appendChild(nTech, techCont.children[techCont.children.length]);
}
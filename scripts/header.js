const header = document.querySelector("header");

document.addEventListener("scroll", () => {
  if(window.scrollY > window.innerHeight*0.85 - header.clientHeight) {
    header.querySelector(".name").style = "width: 20em;";
  }
  else {
    header.querySelector(".name").style = "width: 0em;";
  }
});
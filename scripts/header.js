const header = document.querySelector("header");

checkHeader();
function checkHeader() {
  if(window.scrollY > window.innerHeight*0.85 - header.clientHeight) {
    header.querySelector(".name").style = "width: 18em;";
  }
  else {
    header.querySelector(".name").style = "width: 0em;";
  }
}
document.addEventListener("scroll", checkHeader);
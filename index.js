//SPA controller
goTo = (keyword) => {
  const identifier = '#' + keyword;
  const portfolio = document.querySelector(identifier);
  portfolio.scrollIntoView({ behavior: 'smooth' });
}

//scroll function
window.onscroll = function () { scrollStickyNavBar() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function scrollStickyNavBar() {

  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")

  } else {
    navbar.classList.remove("sticky");
    navTagList[i].style.color = "white";
  }
}

//Auto update Full Year for copy right
const dateNow = new Date()
document.getElementById('dateUpdate').innerHTML = dateNow.getFullYear();



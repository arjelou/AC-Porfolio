goTo = (keyword) => {
    const identifier = '#' + keyword;
    const portfolio = document.querySelector(identifier);
    portfolio.scrollIntoView({behavior: 'smooth'});
}

// const navTagList = document.querySelectorAll("#navTag");
// for (let i = 0; i < navTagList.length; i++) {
//     navTagList[i].style.backgroundColor = "red";
//     return navTagList;
// }


window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;


function myFunction() {
//     const navTagList = document.querySelectorAll("a");

//     for (let i = 0; i < navTagList.length; i++) {
//         navTagList[i].style.color = "RED";
// }

  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
   
  } else {
    navbar.classList.remove("sticky");
    navTagList[i].style.color = "white";
  }
}


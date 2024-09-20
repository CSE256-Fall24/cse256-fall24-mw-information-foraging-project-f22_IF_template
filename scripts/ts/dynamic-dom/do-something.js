export function doSomething() {
//   window.onscroll = function () { myFunction(); };
//   var header = document.getElementById("main-menu-container");
//   var sticky = header.offsetTop;
//   var originalHeight = header.offsetHeight;
//   function myFunction() {
//       if (window.scrollY > sticky) {
//           header.classList.add("sticky");
//       }
//       else {
//           header.classList.remove("sticky");

//       }
//   }
//   console.log("sticky-scroll!");
// }

window.onscroll = function () { myFunction(); };
  
var header = document.getElementById("main-menu-container");
var siteTitle = document.querySelector(".site-title");
var stickyPoint = siteTitle.offsetTop + siteTitle.offsetHeight; // Bottom of the site title

function myFunction() {
    if (window.scrollY > stickyPoint) {
        header.classList.add("sticky");
        document.querySelector(".site-title").style.marginTop = `${header.offsetHeight}px`; // Maintain space
    } else {
        header.classList.remove("sticky");
        document.querySelector(".site-title").style.marginTop = ''; // Reset margin
    }
}

console.log("sticky-scroll!");
}

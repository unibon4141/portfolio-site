"use strict";
let isScrolled = 1;
let navHeight;

function scroll_page() {  
  let nav = document.getElementById("navigation");
  let rect = nav.getBoundingClientRect();
  let navTop = rect.top+window.pageYOffset;
  let y = window.pageYOffset;
  if(y>navTop && isScrolled === 1) {
    navHeight = navTop;
    nav.classList.add("fixed");
    isScrolled = 0;
  } else if(y < navHeight) {
    isScrolled = 1;
    nav.classList.remove("fixed");
  }
}

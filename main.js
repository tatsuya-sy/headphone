"use strict";

const headerModule = (() => {
  const menuBtn = document.getElementById("menu-btn");
  const mask = document.getElementById("mask");
  const header = document.getElementById("header");

  return {
    clickedMenuBtn: menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("clicked");
      mask.classList.toggle("clicked");
      header.classList.toggle("clicked");
    }),
    clickedMask: mask.addEventListener("click", () => {
      menuBtn.classList.remove("clicked");
      mask.classList.remove("clicked");
      header.classList.remove("clicked");
    }),
  };
})();

const footerModule = (() => {
  const accordions = document.getElementsByClassName('accordion');
  console.log(accordions[0]);

  //pc画面の時は、クラスをつけない
  if (window.innerWidth < 1200) {
    for (let i = 0; i < accordions.length; i++) {
      accordions[i].addEventListener('click', () => {
        accordions[i].classList.toggle('clicked');
      })
    }
  }
})();


!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2),n(3),n(4),n(5),n(6),n(7),n(8),n(9),n(10)},function(e,t,n){},function(e,t){window.addEventListener("DOMContentLoaded",(function(){var e=function(e,t,n){var o;e=window.matchMedia(e);var i=function(){e.matches?o=new Swiper(t,n):void 0!==o&&o.destroy()};e.addEventListener("change",i),i()},t={slidesPerView:"auto",pagination:{el:".swiper-pagination",clickable:!0},spaceBetween:16,freeMode:!0};e("(max-width: 768px)",".mySwiper",t),e("(max-width: 768px)",".mySwiper2",t),e("(max-width: 768px)",".mySwiper3",t)}))},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t){var n=document.querySelector(".feedback"),o=document.querySelectorAll("#showFeedback, #showFeedback-mobile"),i=document.getElementById("closeFeedback"),r=document.querySelector(".call"),l=document.querySelectorAll("#showCall, #showCall-mobile"),c=document.getElementById("closeCall"),s=document.querySelector(".blur"),a=document.querySelector("body"),d=!1;function u(){n.style.display="none",s.style.display="none",a.style.overflowY="auto",d=!1}function y(){r.style.display="none",s.style.display="none",a.style.overflowY="auto",d=!1}o.forEach((function(e){e.addEventListener("click",(function(e){e.stopPropagation(),n.style.display="block",n.style.position="fixed",s.style.display="block",a.style.overflowY="hidden",d=!0}))})),i.addEventListener("click",(function(e){e.stopPropagation(),u()})),l.forEach((function(e){e.addEventListener("click",(function(e){e.stopPropagation(),r.style.display="block",r.style.position="fixed",s.style.display="block",a.style.overflowY="hidden",d=!0}))})),c.addEventListener("click",(function(e){e.stopPropagation(),y()})),s.addEventListener("click",(function(e){d&&(e.target===n||n.contains(e.target)||(e.stopPropagation(),u()),e.target===r||r.contains(e.target)||(e.stopPropagation(),y()))}))},function(e,t){var n=document.querySelector(".aside"),o=document.getElementById("menuIcon"),i=document.getElementById("closeAside"),r=document.querySelector(".blurAside"),l=document.querySelector("body"),c=!1;function s(){n.style.display="none",r.style.display="none",l.style.overflowY="auto",c=fasle}o.addEventListener("click",(function(e){e.stopPropagation(),n.style.display="block",n.style.position="fixed",n.style.zIndex=4,r.style.display="block",l.style.overflowY="hidden",c=!0})),i.addEventListener("click",(function(e){e.stopPropagation(),s()})),r.addEventListener("click",(function(e){c&&(e.target===n||n.contains(e.target)||(e.stopPropagation(),s()))})),window.addEventListener("resize",(function(){window.innerWidth>=1366?(n.style.display="block",n.style.position="sticky"):s()}))},function(e,t){var n=document.getElementById("read-more__button-service"),o=document.querySelector(".service__list"),i=document.getElementById("read-more__button-text-service");n.addEventListener("click",(function(){o.classList.toggle("service__list--visible"),i.classList.toggle("read-more__button-text--rot"),o.classList.contains("service__list--visible")?i.textContent="Скрыть":i.textContent="Показать все"}));var r=document.getElementById("read-more__button-brands"),l=document.querySelector(".brands__list"),c=document.getElementById("read-more__button-text-brands");r.addEventListener("click",(function(){l.classList.toggle("brands__list--visible"),c.classList.toggle("read-more__button-text--rot"),l.classList.contains("brands__list--visible")?c.textContent="Скрыть":c.textContent="Показать все"}));var s=document.getElementById("read-more__button-uppage"),a=document.querySelector(".main__text"),d=document.getElementById("read-more__button-text-uppage");s.addEventListener("click",(function(){a.classList.toggle("main__text--visible"),d.classList.toggle("read-more__button-text--rot"),a.classList.contains("main__text--visible")?d.textContent="Скрыть":d.textContent="Читать далее"}))}]);
//# sourceMappingURL=bundle.js.map
"use strict";
// #8Nmt60ZT
//
// – створити блок,
const div_91 = document.createElement("div");
div_91.innerText = 'TEXT';
//
// – додати йому класи wrap, collapse, alpha, beta
div_91.classList.add('wrap', 'collapse', 'alpha', 'beta');
//
// – додати стилі (довільні значення) : колір фону, колір тексту, розмір тексту
div_91.style.backgroundColor = 'red';
div_91.style.color = 'white';
div_91.style.fontSize = '50px';
//
// – додати цей блок в body.
const body_91 = document.getElementsByTagName('body')[0];
// const body_91:HTMLBodyElement | null = document.querySelector('body');
body_91.appendChild(div_91);
//
// – клонувати його повністю, та додати клон в body.
const cloneDiv = div_91.cloneNode(true);
body_91.appendChild(cloneDiv);

const animais = document.getElementById("animais");
//console.log(animais);

const gridSection = document.getElementsByClassName("grid-section");
//console.log(gridSection[0]);

const animaisImg = document.querySelectorAll(".animais img");

//console.log(animaisImg);

const gridSectionHTML = document.getElementsByClassName("grid-section");
const gridSectionNode = document.querySelectorAll(".grid-section");

//console.log(gridSectionHTML);
//console.log(gridSectionNode);

const imagem = document.querySelectorAll("img");

imagem.forEach(function (item, index, array) {
  console.log(array);
});

// Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll("p");
paragrafos.forEach(() => {
  console.log(item);
});
// Mostre o texto dos parágrafos no console
paragrafos.forEach((item) => {
  console.log(item.innerHTML);
});
// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll("img");

imgs.forEach(
  (item,
  (index) => {
    console.log(item, index);
  })
);

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);

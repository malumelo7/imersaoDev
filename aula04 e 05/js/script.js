const movie = {
    title: "Harry Potter",
    url: "http:\\imagem.com",
};

const figure = document.createElement('figcaption');
const img = document.createElement('img');
const title = document.createElement('figcaption');
const listBanners = document.querySelector(".list-banners");

figure.classList.add("wrapper-banner");

img.src = 'img/banner2.png';
img.alt = 'Banner of the Anime';
img.classList.add('main-banner');

title.textContent = "Nome do Anime";
title.classList.add('main-caption');

figure.insertAdjacentElement('beforeend',img);
figure.insertAdjacentElement('beforeend',title);

listBanners.insertAdjacentElement('beforeend',figure);

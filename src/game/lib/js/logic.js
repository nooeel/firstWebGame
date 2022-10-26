const image = new Image();
const canvas = document.querySelector('#main-background');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

image.src = './assets/map/raw/FirstVillage.png';

image.onload = function () {
    ctx.drawImage(image, 0, -300);
};
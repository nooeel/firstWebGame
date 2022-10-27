const backgroundImage = new Image();
const playerImage = new Image();
const canvas = document.querySelector('#main-background');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

backgroundImage.src = './assets/map/raw/FirstVillage.png';
playerImage.src = './assets/characters/leon.png';

backgroundImage.onload = function () {

    ctx.drawImage(backgroundImage, -400, -600);

    playerImage.onload = function () {
        ctx.drawImage(
            playerImage,
            0,      // cropping x
            0,      // crop y
            playerImage.width / 4,  // single person
            playerImage.height / 4,
            canvas.width / 2 - 75,  // position
            canvas.height / 2 + 60,
            playerImage.width / 1.5,      
            playerImage.height / 1.5
        );
    }
}
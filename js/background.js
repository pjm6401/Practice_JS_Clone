const images = ["0.jpg","1.jpg","2.jpg"];

const chosenIamge = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src =`img/${chosenIamge}`;

document.body.appendChild(bgImage);
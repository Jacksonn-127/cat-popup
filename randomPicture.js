window.addEventListener("DOMContentLoaded", () => {
    const catImages = [
      "https://www.thesprucepets.com/thmb/5W_hnV7N_bnqt7wlwPN0gIdHPJ8=/2119x0/filters:no_upscale():strip_icc()/GettyImages-1076898592-fce96b6133cc4a49aea2fe43ef13714e.jpg"
    ];
  
    const randomIndex = Math.floor(Math.random() * catImages.length); 
    const randomImage = catImages[randomIndex];
    const catImage = document.getElementById('catImage'); 
    catImage.src = randomImage;
  });
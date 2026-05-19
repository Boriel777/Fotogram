
// preload images

function preloadImages() {
    for (let i = 0; i < images.length; i++) {
        let img = new Image();
        img.src = images[i];        
    };
};

window.onload = () => {
    renderGallery();
    preloadImages();
};
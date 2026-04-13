// ./img Array

const images = [
    "./img/DSC_0.jpg",
    "./img/DSC_1.jpg",
    "./img/DSC_2.jpg",
    "./img/DSC_3.jpg",
    "./img/DSC_4.jpg",
    "./img/DSC_5.jpg",
    "./img/DSC_6.jpg",
    "./img/DSC_7.jpg",
    "./img/DSC_8.jpg",
    "./img/DSC_9.jpg",
    "./img/DSC_10.jpg",
    "./img/DSC_11.jpg",
    "./img/DSC_12.jpg",
    "./img/DSC_13.jpg",
]

// dynamic Gallery generator function

function renderGallery() {
    let container = document.getElementById('Gallery');
    container.innerHTML = `<div id="galleryWrapper"></div>`;
    let wrapper = document.getElementById('galleryWrapper');
    for (let i = 0; i < images.length; i++) {
        wrapper.innerHTML += `<img class="galleryImg" src="${images[i]}">`
    };
}

window.onload = renderGallery;
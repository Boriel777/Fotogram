// ./img Array

const compressedImages = [
    "./img/Compressed/DSC_0.jpg",
    "./img/Compressed/DSC_1.jpg",
    "./img/Compressed/DSC_2.jpg",
    "./img/Compressed/DSC_3.jpg",
    "./img/Compressed/DSC_4.jpg",
    "./img/Compressed/DSC_5.jpg",
    "./img/Compressed/DSC_6.jpg",
    "./img/Compressed/DSC_7.jpg",
    "./img/Compressed/DSC_8.jpg",
    "./img/Compressed/DSC_9.jpg",
    "./img/Compressed/DSC_10.jpg",
    "./img/Compressed/DSC_11.jpg",
    "./img/Compressed/DSC_12.jpg",
    "./img/Compressed/DSC_13.jpg",
]

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

let currentImgIndex = 0;

// dynamic Gallery generator function

function renderGallery() {
    let wrapper = document.getElementById('galleryWrapper');
    let galleryHTML = '';
    for (let i = 0; i < images.length; i++) {
        galleryHTML += `<img class="galleryImg" loading="lazy" onclick="lightboxGallery(${i})" src="${compressedImages[i]}">`
    };
    wrapper.innerHTML = galleryHTML;
}

window.onload = renderGallery;

// lightbox function

function lightboxGallery(i) {
    currentImgIndex = i;
    let dialog = document.getElementById('lightbox');
    dialog.showModal();
    updateLightbox();
    currentImg.textContent = currentImgIndex + 1;
    totalImg.textContent = images.length
}

function closeLightbox() {
    let dialog = document.getElementById('lightbox');
    dialog.close();
}

// lightbox navigation

function updateLightbox() {
    let dialogImg = document.getElementById('lightboxImg');
    let currentImg = document.getElementById('currentImg');
    dialogImg.style.opacity = '0';
    setTimeout(() => {
    dialogImg.src = images[currentImgIndex];
    currentImg.textContent = currentImgIndex + 1;
    dialogImg.onload = () => {
        dialogImg.style.opacity = '1';
    };
    }, 215);
}

function galleryPagStart() {
    currentImgIndex = 0;
    updateLightbox();
};

function galleryPagEnd() {
    currentImgIndex = images.length -1;
    updateLightbox();
};

function galleryPagNext() {
    if (currentImgIndex >= images.length -1) {return};
    currentImgIndex++;
    updateLightbox();
};

function galleryPagPrev() {
    if (currentImgIndex <= 0) {
        return
    };
    currentImgIndex--;
    updateLightbox();
};


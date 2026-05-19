// ./assets/img Array

const compressedImages = [
    "./assets/img/Compressed/DSC_0.jpg",
    "./assets/img/Compressed/DSC_1.jpg",
    "./assets/img/Compressed/DSC_2.jpg",
    "./assets/img/Compressed/DSC_3.jpg",
    "./assets/img/Compressed/DSC_4.jpg",
    "./assets/img/Compressed/DSC_5.jpg",
    "./assets/img/Compressed/DSC_6.jpg",
    "./assets/img/Compressed/DSC_7.jpg",
    "./assets/img/Compressed/DSC_8.jpg",
    "./assets/img/Compressed/DSC_9.jpg",
    "./assets/img/Compressed/DSC_10.jpg",
    "./assets/img/Compressed/DSC_11.jpg",
    "./assets/img/Compressed/DSC_12.jpg",
    "./assets/img/Compressed/DSC_13.jpg",
]

const images = [
    "./assets/img/DSC_0.jpg",
    "./assets/img/DSC_1.jpg",
    "./assets/img/DSC_2.jpg",
    "./assets/img/DSC_3.jpg",
    "./assets/img/DSC_4.jpg",
    "./assets/img/DSC_5.jpg",
    "./assets/img/DSC_6.jpg",
    "./assets/img/DSC_7.jpg",
    "./assets/img/DSC_8.jpg",
    "./assets/img/DSC_9.jpg",
    "./assets/img/DSC_10.jpg",
    "./assets/img/DSC_11.jpg",
    "./assets/img/DSC_12.jpg",
    "./assets/img/DSC_13.jpg",
]

const imgAlt = [
    "Ein einzelner Baum steht auf einer Wiese mit Blick auf die verschneite Pongauer Landschaft und bewaldete Hügel im Hintergrund.",
    "Großer Baum mit gelb-orangen Blättern auf einer Wiese in der Pongauer Landschaft, im Hintergrund bewaldete Hänge und ein Gebäude.",
    "Weite grüne Wiese mit mehreren Kühen vor einem bewaldeten Berghang in der Pongauer Landschaft",
    "Weite Wiese mit einzelnen Bäumen vor schneebedeckten Bergen der Pongauer Landschaft unter teils bewölktem Himmel",
    "Hügelige Wiese mit einer Baumgruppe im Vordergrund und bewaldeten Bergen im Hintergrund in der Pongauer Landschaft",
    "Grüne Wiese mit vereinzelten Bäumen vor bewaldeten Bergen unter strahlend blauem Himmel mit Sonne in der Pongauer Landschaft",
    "Grüne hügelige Landschaft mit einzelnen Bäumen, einer Kirche am rechten Bildrand und bewaldeten Bergen im Hintergrund unter blauem Himmel mit Wolken",
    "Berglandschaft der Pongauer Landschaft mit bewaldeten und grünen Hängen unter einem wolkigen Himmel",
    "Grüne hügelige Wiese mit einzelnen Bäumen vor schneebedeckten Bergen unter blauem Himmel mit Wolken in der Pongauer Landschaft",
    "Kleiner brauner Pilz wächst zwischen Laub, Zweigen und Gräsern auf dem Waldboden in der Pongauer Landschaft",
    "Ein einzelner brauner Pilz mit spitzem Hut steht aufrecht zwischen braunen Herbstlaubblättern und Zweigen auf dem Waldboden in der Pongauer Landschaft",
    "Zwei Pferde stehen im Schatten von Bäumen mit Blick auf eine Berglandschaft in der Pongauer Landschaft",
    "Ein sonnenbeschienener Waldweg, bedeckt mit herabgefallenen Herbstblättern, umgeben von Bäumen mit leuchtend gelbem und grünem Laub, unter einem strahlend blauen Himmel. ",
    "Eine malerische Landschaft mit einem Tal, einer Stadt, grünen Feldern und einem sich schlängelnden Fluss. Schneebedeckte Berge und ein teilweise bewölkter Himmel runden das friedliche Bild ab.",
];

let currentImgIndex = 0;

function handleGalleryKey(event, i) {
    if (event.key === 'Enter' || event.key === '') {
        event.preventDefault();
        lightboxGallery(i)
    }
};

// dynamic Gallery generator function

function renderGallery() {
    let wrapper = document.getElementById('galleryWrapper');
    let galleryHTML = '';
    for (let i = 0; i < images.length; i++) {
        galleryHTML += `
        <li>
            <button  onclick="lightboxGallery(${i})" onkeydown="handleGalleryKey(event, ${i})"> 
            <img class="galleryImg" loading="lazy" src="${compressedImages[i]}" alt="${imgAlt[i]}"> 
            </button>
        </li>`
    };
    wrapper.innerHTML = galleryHTML;
}

window.onload = renderGallery;

function toggleScrolling() {
    document.body.classList.toggle('no_scrolling');
};

// lightbox function

function lightboxGallery(i) {
    currentImgIndex = i;
    let dialog = document.getElementById('lightbox');
    dialog.showModal();
    updateLightbox();
    toggleScrolling();
    currentImg.textContent = currentImgIndex + 1;
    totalImg.textContent = images.length
}

function closeLightbox() {
    let dialog = document.getElementById('lightbox');
    dialog.close();
    toggleScrolling();
}

// lightbox navigation

function updateLightbox() {
    let dialogImg = document.getElementById('lightboxImg');
    let currentImg = document.getElementById('currentImg');
    dialogImg.classList.add('hidden');
    setTimeout(() => {
        dialogImg.src = images[currentImgIndex];
        dialogImg.alt = imgAlt[currentImgIndex];
        currentImg.textContent = currentImgIndex + 1;
        dialogImg.onload = () => {
            dialogImg.classList.remove('hidden');
        };
    }, 180);
}

function galleryPagStart() {
    currentImgIndex = 0;
    updateLightbox();
};

function galleryPagEnd() {
    currentImgIndex = images.length - 1;
    updateLightbox();
};

function galleryPagNext() {
    if (currentImgIndex >= images.length - 1) { return };
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


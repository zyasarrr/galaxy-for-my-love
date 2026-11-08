
document.addEventListener("DOMContentLoaded", () => {

    
    // =====================================
    // GALAXY IMAGE LIGHTBOX
    // =====================================

    const galaxyImage = document.getElementById("galaxyImage");
    const imageLightbox = document.getElementById("imageLightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const lightboxClose = document.getElementById("lightboxClose");

    function closeLightbox() {
        imageLightbox.classList.remove("active");
        document.body.style.overflow = "";
    }

    // Fotoğrafa tıklanınca büyüt
    galaxyImage.addEventListener("click", () => {
        lightboxImage.src = galaxyImage.src;

        imageLightbox.classList.add("active");
        document.body.style.overflow = "hidden";
    });

    // Kapatma butonu
    lightboxClose.addEventListener("click", closeLightbox);

    // Fotoğraf dışındaki alana tıklanınca kapat
    imageLightbox.addEventListener("click", (event) => {
        if (event.target === imageLightbox) {
            closeLightbox();
        }
    });

    // ESC tuşuyla kapat
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeLightbox();
        }
    });


    const letterButton = document.getElementById("letterButton");
    const letterSection = document.getElementById("letterSection");
    const backButton = document.getElementById("backButton");

    // Özür mektubunu aç
    letterButton.addEventListener("click", () => {

        letterSection.classList.add("visible");

        letterSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

    // Ana ekrana dön
    backButton.addEventListener("click", () => {

        document.getElementById("home")?.scrollIntoView({
            behavior: "smooth"
        });

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

    // Video kontrolü
    const video = document.getElementById("backgroundVideo");

    if (video) {

        video.muted = true;

        video.play().catch(error => {
            console.warn("Video otomatik başlatılamadı:", error);
        });

    }

});

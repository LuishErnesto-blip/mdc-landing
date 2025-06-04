document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".mosaic img");
    images.forEach((img, index) => {
        setTimeout(() => {
            img.style.opacity = "1";
        }, index * 700);
    });
});

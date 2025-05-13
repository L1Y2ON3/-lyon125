let modal = document.querySelector('.modal');
let modalImg = document.getElementById("modalImage");
let captionText = document.getElementById("caption");
let closeBtn = document.querySelector(".close");
document.querySelectorAll('.photo img').forEach(img => {
    img.addEventListener('click', function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerText = this.alt;
    });
});
closeBtn.onclick = function () {
    modal.style.display = "none";
};
window.onclick = function (EVENT) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
document.querySelectorAll('.filter').forEach(filter => {
    filter.addEventListener('click', function (e) {
        e.preventDefault();
        let category = this.getAttribute('data-category');
        document.querySelectorAll('.photo').forEach(photo => {
            let photoCategory = photo.getAttribute('data-category');
            if (category === 'all' || photoCategory === category) {
                photo.style.display = 'block';
            } else {
                photo.style.display = 'none';
            }
        });
    });
});

'use strict';

const modal = document.getElementById("phoneModal");
const span = document.getElementsByClassName("close")[0];

function showModal() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            showModal();
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5 
});

const target = document.getElementById('block3');
observer.observe(target);
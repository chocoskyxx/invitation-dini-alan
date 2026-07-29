// Nama Tamu dari URL
const params = new URLSearchParams(window.location.search);
const guest = params.get("to");
if (guest) {
    document.getElementById("guest").textContent = decodeURIComponent(guest);
}

// Tombol Buka Undangan
const openBtn = document.getElementById("openBtn");
const cover = document.querySelector(".cover");
const home = document.getElementById("home");

openBtn.addEventListener("click", function () {
    cover.style.display = "none";
    home.style.display = "block";
    window.scrollTo({ top: 0, behavior: "smooth" });
    
    // Putar musik
    const music = document.getElementById("bg-music");
    music.play();
});

// Countdown Akad Nikah
const targetDate = new Date("2026-08-22T10:00:00+07:00").getTime();
const countdown = setInterval(function () {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
        clearInterval(countdown);
        document.getElementById("days").innerHTML = "0";
        document.getElementById("hours").innerHTML = "0";
        document.getElementById("minutes").innerHTML = "0";
        document.getElementById("seconds").innerHTML = "0";
        return;
    }

    document.getElementById("days").innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("hours").innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById("minutes").innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById("seconds").innerHTML = Math.floor((distance % (1000 * 60)) / 1000);
}, 1000);

// Animasi Scroll
const elements = document.querySelectorAll(".fade, .event");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.15 });

elements.forEach((el) => observer.observe(el));

// Efek Partikel Cahaya
const particleContainer = document.querySelector(".particles");

function createParticle() {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    
    particle.style.left = Math.random() * 100 + "vw";
    particle.style.animationDuration = (Math.random() * 8 + 7) + "s";
    
    const size = Math.random() * 4 + 2; 
    particle.style.width = size + "px";
    particle.style.height = size + "px";
    
    particleContainer.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 15000);
}

setInterval(createParticle, 500);

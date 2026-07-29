// Nama Tamu dari URL
const params = new URLSearchParams(window.location.search);
const guest = params.get("to");
if (guest) {
    const guestEl = document.getElementById("guest");
    if (guestEl) guestEl.textContent = decodeURIComponent(guest);
}

// Tombol Buka Undangan & Putar Musik
document.addEventListener("DOMContentLoaded", function() {
    const openBtn = document.getElementById("openBtn");
    const cover = document.querySelector(".cover");
    const home = document.getElementById("home");
    const music = document.getElementById("bg-music");

    if (openBtn) {
        openBtn.addEventListener("click", function () {
            if (cover) cover.style.display = "none";
            if (home) home.style.display = "block";
            window.scrollTo({ top: 0, behavior: "smooth" });
            
            if (music) {
                music.play().catch(error => console.log("Musik gagal diputar otomatis"));
            }
        });
    }
});

// Countdown
const targetDate = new Date("2026-08-22T09:00:00+07:00").getTime();
const countdown = setInterval(function () {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
        clearInterval(countdown);
        return;
    }

    const d = document.getElementById("days");
    const h = document.getElementById("hours");
    const m = document.getElementById("minutes");
    const s = document.getElementById("seconds");

    if (d) d.innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
    if (h) h.innerHTML = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if (m) m.innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    if (s) s.innerHTML = Math.floor((distance % (1000 * 60)) / 1000);
}, 1000);

// Efek Partikel Animasi Bunga/Daun Jatuh
const particleContainer = document.querySelector(".particles");
if (particleContainer) {
    function createParticle() {
        const particle = document.createElement("div");
        particle.classList.add("particle");
        particle.style.left = Math.random() * 100 + "vw";
        particle.style.animationDuration = (Math.random() * 8 + 7) + "s";
        
        const size = Math.random() * 6 + 4; 
        particle.style.width = size + "px";
        particle.style.height = size + "px";
        
        particleContainer.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 15000);
    }
    setInterval(createParticle, 400);
}

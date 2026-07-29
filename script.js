// ==========================
// NAMA TAMU DARI URL
// ==========================

const params = new URLSearchParams(window.location.search);
const guest = params.get("to");

if (guest) {
    document.getElementById("guest").textContent =
        decodeURIComponent(guest);
}

// ==========================
// TOMBOL BUKA UNDANGAN
// ==========================

const openBtn = document.getElementById("openBtn");
const cover = document.querySelector(".cover");
const home = document.getElementById("home");

openBtn.addEventListener("click", function () {

    cover.style.display = "none";
    home.style.display = "block";

    // Jika ada musik, otomatis diputar
    const music = document.getElementById("music");

    if (music) {
        music.play().catch(() => {});
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ==========================
// COUNTDOWN AKAD NIKAH
// 22 Agustus 2026
// 09.00 WIB
// ==========================

const targetDate = new Date("2026-08-22T09:00:00+07:00").getTime();

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

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}, 1000);

// ==========================
// ANIMASI SCROLL
// ==========================

const elements = document.querySelectorAll(".fade, .event");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

elements.forEach((el)=>{

    observer.observe(el);

});

// ==========================
// KELopak BUNGA
// ==========================

const flowerContainer = document.querySelector(".flowers");

function createFlower(){

const flower = document.createElement("div");

flower.classList.add("flower");

flower.innerHTML = "🌸";

flower.style.left = Math.random()*100 + "vw";

flower.style.animationDuration =
(Math.random()*5+6)+"s";

flower.style.fontSize =
(Math.random()*15+18)+"px";

flowerContainer.appendChild(flower);

setTimeout(()=>{

flower.remove();

},11000);

}

setInterval(createFlower,800);
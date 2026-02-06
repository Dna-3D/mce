// Carousel slides for homepage announcements (images from project)
const carouselSlides = [
    { title: "NAMES merch", image: "merch.jpeg", date: "january 15, 2025", link: "https://forms.gle/WfSa8vPRaKHBaFP47" },
    { title: "Fusion Executives - Skill up Initiative", image: "codeboot.png", date: "December 12, 2025", link: "https://chat.whatsapp.com/BJUuAfkeE0TCblAgsCIyjA?mode=gi_t" },
    { title: "NAMES Registration", image: "id.png", date: "december 3, 2025", link: "https://forms.gle/EW6fRMyuY1NG4YYU8" },
];

// (Removed confetti animation from homepage to simplify and reduce CPU usage)

function initCarousel() {
    const carousel = document.getElementById('carousel');
    if (!carousel) return;

    // build track
    const track = document.createElement('div');
    track.className = 'carousel-track';

    carouselSlides.forEach((slide) => {
        const s = document.createElement('a');
        s.className = 'carousel-slide';
        s.href = slide.link || '#';
        s.innerHTML = `
            <img src="${slide.image}" alt="${slide.title}">
            <div class="carousel-caption"><strong>${slide.title}</strong><br><small>${slide.date}</small></div>
        `;
        track.appendChild(s);
    });

    carousel.appendChild(track);

    let index = 0;
    const slides = track.children;
    const total = slides.length;

    function goTo(i) {
        index = (i + total) % total;
        track.style.transform = `translateX(${-index * 100}%)`;
    }

    document.getElementById('carousel-prev').addEventListener('click', () => goTo(index - 1));
    document.getElementById('carousel-next').addEventListener('click', () => goTo(index + 1));

    // autoplay
    let autoplay = setInterval(() => goTo(index + 1), 5000);

    carousel.addEventListener('mouseenter', () => clearInterval(autoplay));
    carousel.addEventListener('mouseleave', () => { autoplay = setInterval(() => goTo(index + 1), 5000); });

    // start
    goTo(0);
}

function initHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (!hamburger || !navMenu) return;
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // close menu when a nav link or the theme toggle inside the menu is clicked
    navMenu.querySelectorAll('a, .theme-toggle').forEach(el => {
        el.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

function initDarkModeToggle() {
    // Support multiple toggle controls (one in nav and one in dropdown)
    const toggles = Array.from(document.querySelectorAll('.theme-toggle'));
    if (!toggles.length) return;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    function updateToggleStates() {
        const isDark = document.body.classList.contains('dark-mode');
        toggles.forEach(t => {
            t.setAttribute('aria-pressed', isDark ? 'true' : 'false');
            t.title = isDark ? 'Switch to light theme' : 'Switch to dark theme';
            // ensure icons visibility if present
            if (isDark) {
                t.classList.add('active');
            } else {
                t.classList.remove('active');
            }
        });
    }

    toggles.forEach(t => t.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
        updateToggleStates();
    }));

    // initialize
    updateToggleStates();
}

document.addEventListener('DOMContentLoaded', () => {
    initHamburgerMenu();
    initDarkModeToggle();
    initCarousel();
    // Respect users who request reduced motion: pause or hide hero video
    try {
        const prefersReduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const heroVideo = document.getElementById('hero-video');
        if (heroVideo) {
            if (prefersReduce) {
                // stop playback and hide element (CSS also hides via media query)
                heroVideo.pause();
                heroVideo.removeAttribute('autoplay');
                heroVideo.style.display = 'none';
            } else {
                // attempt to play (some browsers block autoplay unless muted; video is muted)
                const playPromise = heroVideo.play();
                if (playPromise && playPromise.catch) playPromise.catch(() => {/* autoplay blocked - do nothing */});
            }
        }
    } catch (e) { /* ignore */ }
});

const studentWishes = [
    { name: "Godslove", message: "Happy birthday! Wishing you an amazing year ahead filled with success and joy! 🎉" },
    { name: "Stephanie", message: "Happy birthday 🎉" },
     { name: "Kato", message: "Happy birthday to Golden!. 🎉" },
    { name: "Henry Nwaogbe", message: "Happy birthday michael  🎉" },
  { name: "DNA", message: "Happy Birthday...more assignment deals😂!" },
];

const birthdayVideos = [
    { title: "Henry cares", videoUrl: "https://res.cloudinary.com/dgaq2eoam/video/upload/v1760226236/20251011_152751_jnnkhf.mp4" },
    { title: "Tobenna cares", videoUrl: "https://res.cloudinary.com/dgaq2eoam/video/upload/v1760226232/WhatsApp_Video_2025-10-11_at_16.37.18_odlwma.mp4" },
    { title: "mmi cares", videoUrl: "https://res.cloudinary.com/dgaq2eoam/video/upload/v1760226223/WhatsApp_Video_2025-10-11_at_16.37.44_chsnfb.mp4" },
    { title: "camelita cares", videoUrl: "https://res.cloudinary.com/dgaq2eoam/video/upload/v1760226223/WhatsApp_Video_2025-10-11_at_16.33.31_rulibt.mp4" },
    { title: "Immaculate cares", videoUrl: "https://res.cloudinary.com/dgaq2eoam/video/upload/v1760226221/WhatsApp_Video_2025-10-11_at_16.36.30_fqrvhs.mp4" },
    { title: "Liltrimz cares", videoUrl: "https://res.cloudinary.com/dgaq2eoam/video/upload/v1760226221/WhatsApp_Video_2025-10-11_at_16.34.36_ttwmdz.mp4" },
    { title: "chibuike cares", videoUrl: "https://res.cloudinary.com/dgaq2eoam/video/upload/v1760226220/WhatsApp_Video_2025-10-11_at_16.36.55_cjfz4i.mp4" }
];

function createConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confettiPieces = [];
    const confettiCount = 150;
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b', '#6ab04c', '#c56cf0'];

    class ConfettiPiece {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height - canvas.height;
            this.size = Math.random() * 10 + 5;
            this.speedY = Math.random() * 3 + 2;
            this.speedX = Math.random() * 2 - 1;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.rotation = Math.random() * 360;
            this.rotationSpeed = Math.random() * 5 - 2.5;
        }

        update() {
            this.y += this.speedY;
            this.x += this.speedX;
            this.rotation += this.rotationSpeed;

            if (this.y > canvas.height) {
                this.y = -20;
                this.x = Math.random() * canvas.width;
            }
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation * Math.PI / 180);
            ctx.fillStyle = this.color;
            ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
            ctx.restore();
        }
    }

    for (let i = 0; i < confettiCount; i++) {
        confettiPieces.push(new ConfettiPiece());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confettiPieces.forEach(piece => {
            piece.update();
            piece.draw();
        });
        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

function loadWishes() {
    const wishesContainer = document.getElementById('wishes-container');
    if (!wishesContainer) return;

    studentWishes.forEach((wish, index) => {
        const wishCard = document.createElement('div');
        wishCard.className = 'wish-card';
        wishCard.style.animationDelay = `${index * 0.05}s`;
        wishCard.innerHTML = `
            <div class="wish-name">${wish.name}</div>
            <div class="wish-message">${wish.message}</div>
        `;
        wishesContainer.appendChild(wishCard);
    });
}

function loadVideos() {
    const videosContainer = document.getElementById('videos-container');
    if (!videosContainer) return;

    birthdayVideos.forEach((video, index) => {
        const videoCard = document.createElement('div');
        videoCard.className = 'video-card';
        videoCard.style.animationDelay = `${index * 0.1}s`;
        videoCard.innerHTML = `
            <div class="video-wrapper">
                <video controls>
                    <source src="${video.videoUrl}" type="video/mp4">
                </video>
            </div>
            <div class="video-title">${video.title}</div>
        `;
        videosContainer.appendChild(videoCard);
    });
}

function initHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (!hamburger || !navMenu) return;
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

function initDarkModeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    
    if (!themeToggle) return;
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
    
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    createConfetti();
    loadWishes();
    loadVideos();
    initHamburgerMenu();
    initDarkModeToggle();
});

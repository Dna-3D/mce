const studentWishes = [
    { name: "Chibuihe olemgbe", message: "Happy birthday Oscar! Wishing you an amazing year ahead filled with success and joy! 🎉" },
    { name: "Odinka stephanie", message: "For every update, reminder and rescue- Thank you Oscar-kun! 🎉" },
    { name: "John Daniel", message: "Your efforts are highly appreciated! all youve done, seen & unseen thank you 🎉" },
     { name: "Ka_to", message: "Happy birthday to Oscar! May God grant your secret desires, the sky is your starting point. kato cares 🎉" },
    { name: "Henry Nwaogbe", message: "Happy birthday Oscar!thank you for all you have done for our set as course rep. God bless you! 🎉" },
    { name: "Obinna Ike-Ogaraku", message: "Birthday blessings oscar, you ve been a very caring and thoughtfull course rep thanks for all you do, endless success,happiness and btc! 🎉" },
    { name: "Peter kalu ogbaje", message: "Oscar! Have the best birthday ever! You're an amazing classmate and friend! 🎂" },
     { name: "Gospel Okechukwu", message: "I really appreciate all your hardwork and commitment for us this semester.mmytc! 🎉" },
      { name: "Slime", message: "Happy birthday Oscar! God bless you for all you do! 🎉" },
    { name: "Baani", message: "Wishing you a fantastic birthday Oscar! May all your dreams come true! 🎈" },
    { name: "Mac_wisdom Akagbusim", message: "Happy birthday to the coolest mechatronics student! Enjoy your special day! 🎊" },
    { name: "Stephen Boss", message: "Oscar, have an incredible birthday! Keep being awesome! 🥳" },
    { name: "lil_trimz", message: "Happy birthday Oscar! your leadership of 200 people is top notch,may God grant you strength to keep up the good work! 🤖" },
    { name: "Shadow monarch", message: "Happy birthday Oscar!wish you many more fruitful years ahead in good health. 🍰" },
    { name: "coin", message: "api bi day! 🌟" },
    { name: "Obeta Gabriel", message: "Wishing you the happiest of birthdays! Stay blessed Oscar! 🙏" },
    { name: "Korie", message: "Happy birthday to our brilliant classmate! Have a wonderful day! 🎁" },
    { name: "Ezedinachi Blessing Adiele", message: "Oscar! Wishing you all the best on your birthday! Party hard! 🎉" },
    { name: "Somachi", message: "Happy birthday Oscar! May your year be filled with innovation and success! 💡" },
    { name: "Big ben", message: "Happy birthday! wishing you a wonderful day and fantastic year ahead, thanks for being an amazing course rep! 🎂" },
    { name: "Chidi Anyanwu", message: "Happy birthday Oscar! Keep shining bright! ✨" },
    { name: "Dickson Petrus", message: "Oscar, have the most wonderful birthday celebration! You deserve it! 🎈" },
    { name: "Tobenna", message: "Happy birthday to you Oscar fx, wishing you all the best in life and pray that you're always surrounded by positive energy. Enjoy your day EURUSD lord 💙 🚀" },
    { name: "kc Bryan", message: "Wishing you joy, success, and happiness on your birthday Oscar! 🎊" },
    { name: "Marcus", message: "Happy birthday Oscar! Benz very soon! 😄" },
    { name: "Immaculate", message: "Oscar! Have an unforgettable birthday celebration! 🥳" },
    { name: "i-jay", message: "Happy birthday to the kindest soul in our class! Enjoy your day! 🎁" },
    { name: "Uzochukwu Jude Thaddeus", message: "Oscar, wishing you a birthday filled with love and laughter! 💙" },
    { name: "mc Clearance", message: "Another verse in your beautiful stories! 🌟" },
    { name: "Camelita", message: "Birthday wishes to you nkembuofor, may God grant your heart desirs! 🎉" },
      { name: "Emmanuel okoh", message: "Happy birthday oscar. wishing you a very happy birthday. thank you for being the class voice, may your hard work pay off! 🌟" },
       { name: "Ibeke Sampson chukwuebuka", message: "It's a great thing to be born; but a far greater and glorious thing to be born on this day, when legends are born. Happy Birthday, Oscar!" },
  { name: "DNA", message: "You dey go na, we never try?!" },
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

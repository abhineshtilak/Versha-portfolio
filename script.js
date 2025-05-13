/* ----- NAVIGATION MENU TOGGLE ----- */
function myMenuFunction() {
  const menuBtn = document.getElementById('myNavMenu');
  menuBtn.classList.toggle('responsive');
}

/* ----- HEADER SHADOW ON SCROLL ----- */
window.onscroll = function () {
  headerShadow();
  scrollActive(); // Keep scroll link activation synced
};

function headerShadow() {
  const navHeader = document.getElementById('header');

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = '0 1px 6px rgba(0, 0, 0, 0.1)';
    navHeader.style.height = '70px';
    navHeader.style.lineHeight = '70px';
  } else {
    navHeader.style.boxShadow = 'none';
    navHeader.style.height = '90px';
    navHeader.style.lineHeight = '90px';
  }
}

/* ----- TYPING EFFECT ----- */
const typingEffect = new Typed('.typedText', {
  strings: ['An Artist','A Certified CSR', 'A Data Analyst', 'A Commodity Analyst' ],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 500,
});

/* ----- SCROLL REVEAL ANIMATION (TOP) ----- */
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true,
});

sr.reveal('.featured-text-card', {});
sr.reveal('.featured-name', { delay: 100 });
sr.reveal('.featured-text-info', { delay: 200 });
sr.reveal('.featured-text-btn', { delay: 200 });
sr.reveal('.social-icons', { delay: 200 });
sr.reveal('.featured-image', { delay: 300 });

sr.reveal('.project-box', { interval: 200 });
sr.reveal('.top-header', {});

/* ----- SCROLL REVEAL LEFT/RIGHT ----- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true,
});
srLeft.reveal('.about-info', { delay: 100 });
srLeft.reveal('.contact-info', { delay: 100 });

const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true,
});
srRight.reveal('.skills-box', { delay: 100 });
srRight.reveal('.form-control', { delay: 100 });

/* ----- ACTIVE LINK ON SCROLL ----- */
const sections = document.querySelectorAll('section[id]');
function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');
    const link = document.querySelector('.nav-menu a[href*=' + sectionId + ']');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      link?.classList.add('active-link');
    } else {
      link?.classList.remove('active-link');
    }
  });
}
window.addEventListener('scroll', scrollActive);

/* ----- COPY EMAIL TO CLIPBOARD FUNCTION ----- */
function copyToClipboard() {
  const emailText = document.getElementById("email").innerText;

  navigator.clipboard.writeText(emailText).then(() => {
    showCopiedPopup();
  }).catch(err => {
    console.error("Failed to copy: ", err);
  });
}

function showCopiedPopup() {
  const popup = document.getElementById("copied-popup");

  popup.classList.add("show");
  setTimeout(() => {
    popup.classList.remove("show");
  }, 1500);
}

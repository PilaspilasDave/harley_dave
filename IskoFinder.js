//LANDING PAGE

//Exam Requirement 1: Basic DOM Manipulation  
const updateContentBtn = document.getElementById("updateContentBtn");
const welcomeMessage = document.getElementById("welcome-message");

updateContentBtn.addEventListener("click", () => {
    welcomeMessage.textContent = "Ready to discover your scholarship match with IskoFINDER? Explore now!";
    welcomeMessage.classList.add("updated");
});

//Exam Requirement 2: Form Validation
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('message');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let isValid = true;

    // Validate name
    if (nameInput.value.trim() === '') {
        nameInput.value = '';  // Clear any existing value
        nameInput.placeholder = 'Please enter your name.';
        nameInput.style.borderColor = 'red';
        isValid = false;
    } else {
        nameInput.placeholder = 'Name';
        nameInput.style.borderColor = '';
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        emailInput.value = '';  // Clear any existing value
        emailInput.placeholder = 'Please enter a valid email address.';
        emailInput.style.borderColor = 'red';
        isValid = false;
    } else {
        emailInput.placeholder = 'Email';
        emailInput.style.borderColor = '';
    }

    // Validate phone number
    const phoneRegex = /^\d{11}$/;
    if (!phoneRegex.test(phoneInput.value)) {
        phoneInput.value = '';  // Clear any existing value
        phoneInput.placeholder = 'Please enter a valid 11-digit phone number (ex. 0912345678).';
        phoneInput.style.borderColor = 'red';
        isValid = false;
    } else {
        phoneInput.placeholder = 'Phone Number';
        phoneInput.style.borderColor = '';
    }

    // Validate message
    if (messageInput.value.trim() === '') {
        messageInput.value = '';  // Clear any existing value
        messageInput.placeholder = 'Please enter a message.';
        messageInput.style.borderColor = 'red';
        isValid = false;
    } else {
        messageInput.placeholder = 'Message';
        messageInput.style.borderColor = '';
    }

    // Show success message if valid
    if (isValid) {
        console.log('Message submitted successfully!');
        successMessage.textContent = 'Message submitted successfully.';
        successMessage.style.display = 'block';
    }
});

//Exam Requirement 3: Interactive Navigation Menu
//Prins: Para 'to sa pag hide ng nav buttons sa landing page
const menuBtn = document.getElementById('menuBtn');
const navBtns = document.getElementById('navbtns');

menuBtn.addEventListener('click', () => {
    navBtns.classList.toggle('hide');
});

//Exam Requirement 4: Image Gallery with Javascript

const swiper = new Swiper('.mySwiper', {
    slidesPerView: 3,
    slidesPerGroup: 1,
    loop: true,
    
    pagination: {
      clickable: true,
      dynamicBullets: true
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

//Exam Requirement 5: Dynamic Style Change
//Prins: Para 'to sa dark mode ng landing page
document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('nav').classList.toggle('dark-mode');
    document.getElementById('homepage').classList.toggle('dark-mode');
    document.querySelectorAll('button').forEach(function(btn) {
        btn.classList.toggle('dark-mode');
    });
    document.querySelectorAll('a').forEach(function(link) {
        link.classList.toggle('dark-mode');
    });
    document.querySelectorAll('input, textarea').forEach(function(input) {
        input.classList.toggle('dark-mode');
    });
    document.getElementById('servicepage').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
});

//Prins: Ito 'yong para sa animation ng images pag mag scroll scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate");
        } else {
            entry.target.classList.remove("animate");
        }
    });
}, {
    threshold: 0.5
});

const aboutUsImages = document.querySelectorAll("#aboutus .image");
const servicePageImages = document.querySelectorAll(".services .srvcCarousel img");

aboutUsImages.forEach(image => observer.observe(image));
servicePageImages.forEach(image => observer.observe(image));

window.addEventListener('scroll', function() {
    const allImages = document.querySelectorAll('#aboutus .image, .services .srvcCarousel img');
    const windowHeight = window.innerHeight;

    allImages.forEach(image => {
        const imageTop = image.getBoundingClientRect().top;

        if (imageTop < windowHeight && imageTop > 0) {
            image.classList.add('animate');
        } else {
            image.classList.remove('animate');
        }
    });
});

//Prins: This is para sa mga buttons
function toLogin(){
    window.location.href = 'IskoFINDERLogIn.html';
}

function toSignUp(){
    window.location.href = 'IskoFINDERSignUp.html';
}

function toUserDB(){
    window.location.href = 'IskoFINDERUserDashboard.html'
}
function toServices(){
    window.location.href = '#servicepage';
}

//Prins: Para 'to sa cursor ng lahat ng button 
const allButtons = document.querySelectorAll("button");

allButtons.forEach(button => {
    button.addEventListener("mouseover", () => {
        button.style.cursor = "pointer";
    });
});

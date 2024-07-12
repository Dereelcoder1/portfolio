// navbar Position

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const hero = document.querySelector('.hero');
    const heroBottom = hero.getBoundingClientRect().bottom;

    if (window.scrollY >= heroBottom) {
        navbar.style.position = 'fixed';
        navbar.style.top = '0';
    }else {
        navbar.style.position = 'relative';
        navbar.style.top = 'initial';
    }
});



// Testimonials Carousel

document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel');
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselItems = document.querySelectorAll('.carousel-item');

    let currentIndex = 0;
    const totalItems = carouselItems.length;
    const intervalTime = 5000; // Change to adjust interval time (in milliseconds)

    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalItems;
      const translateX = -currentIndex * carousel.offsetWidth;
      carouselInner.style.transform = `translateX(${translateX}px)`;
    }

    setInterval(nextSlide, intervalTime);
  });

//   Open The Contact Section

document.querySelector('.open').addEventListener('click', function() {
    window.alert('Scroll Up to Contact');
    document.querySelector('.bg-modal').style.display = "flex";
})

// Close the Contact Section

document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'none';
})


// Like Button

// document.querySelector('.heart').addEventListener('click', function() {
//     document.querySelector('.heart').style.backgroundColor = "#9823b6";
//     document.querySelector('.thumbs').style.backgroundColor = "transparent";

// })

// Dislike 
// document.querySelector('.thumbs').addEventListener('click', function() {
//     document.querySelector('.heart').style.backgroundColor = "transparent";
//     document.querySelector('.thumbs').style.backgroundColor = "#9823b6";
// })

// Comment 

// document.querySelector('.comment').addEventListener('click', function() {
//     let commentBox = document.querySelector('.comm');

//     commentBox.classList.toggle('reveal');
// })

// Mobile Responsiveness Menu

document.querySelector('.menu').addEventListener('click', function() {
    let showSideBar = document.querySelector('.nav-modal');

    showSideBar.classList.toggle('show-side-bar');


   


});


//. ...... . ..Mobile Nav Bar
let menu = document.querySelector('.menu');
document.querySelector('.menu-icon').addEventListener('click',()=>{
    menu.classList.toggle('mobileNav');
})

//  ...................Slider

var slideInterval;
var slider = document.querySelector(".slider");
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

function showNextSlide() {
  showSlide(currentSlide + 1);
}

function showPrevSlide() {
  showSlide(currentSlide - 1);
}

prevButton.addEventListener('click', showPrevSlide);
nextButton.addEventListener('click', showNextSlide);

setInterval(()=>{
    showNextSlide(1);
},3000);

showSlide(currentSlide);

/* Copyright Bar */
 
const socialIcons = document.querySelector('.social-icons');
const socialLinks = socialIcons.querySelectorAll('a');

socialLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.classList.add('animated', 'pulse');
  });
  
  link.addEventListener('mouseout', () => {
    link.classList.remove('animated', 'pulse');
  });
});


// ...................... Detail  Page .....................//
let cards = document.querySelectorAll('.card');

cards.forEach((card)=>{
  card.addEventListener('click' , ()=>{
      let youtubeIframe = card.querySelector('iframe').outerHTML;
      let cardTitle = card.querySelector('.gameplay-title').textContent;
      
      sessionStorage.setItem('cardTitle', cardTitle);
      sessionStorage.setItem('youtubeIframe', youtubeIframe);
      
      window.location.href = ('Single Details Page.html');
      console.log(youtubeIframe)
      console.log('crdClick');
    })
})

function giveaway(){
  window.location.href = "Give Away.html";
}

function tips(){
  window.location.href = "Tips Tricks.html";
}



// const slides = document.querySelectorAll('.slide');

// setInterval(()=>{
//   slides.forEach(slide => {
//     const randomNumber = Math.floor(Math.random() * 1000);
//     slide.style.backgroundImage = `url('https://picsum.photos/seed/${randomNumber}/1200/800')`;
//   });
// },3000)

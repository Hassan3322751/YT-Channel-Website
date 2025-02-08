let cardTitle = sessionStorage.getItem('cardTitle');
const youtubeIframe = sessionStorage.getItem('youtubeIframe');
let title = document.querySelector('.gameplay-title').innerHTML = cardTitle;
document.getElementById('youtubeContainer').innerHTML = youtubeIframe;
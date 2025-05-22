// DOM Elements
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');

const next1 = document.getElementById('next1');
const next2 = document.getElementById('next2');
const back2 = document.getElementById('back2');
const back3 = document.getElementById('back3');

const fireworksContainer = page1.querySelector('.fireworks-container');
const giftsContainer = page1.querySelector('.gifts-container');
const movingPhotosContainer = document.getElementById('movingPhotos');
const galleryContainer = page3.querySelector('.gallery');

// Navigation handlers
next1.onclick = () => {
  page1.style.display = 'none';
  next1.style.display = 'none';
  page2.style.display = 'flex';
};
next2.onclick = () => {
  page2.style.display = 'none';
  page3.style.display = 'flex';
};
back2.onclick = () => {
  page2.style.display = 'none';
  page1.style.display = 'flex';
  next1.style.display = 'block';
};
back3.onclick = () => {
  page3.style.display = 'none';
  page2.style.display = 'flex';
};

// Fireworks animation - create a firework at random positions on page1
function createFirework() {
  const

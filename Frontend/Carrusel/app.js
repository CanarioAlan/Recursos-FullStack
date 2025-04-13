const track = document.getElementById("carousel");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

// calculamos el espacio entre los cards
const card = track.querySelector('.card');
const cardStyle = window.getComputedStyle(card);
const cardWidth = card.offsetWidth;
const cardMargin = parseInt(cardStyle.marginRight) || 0;
const scrollAmount = cardWidth + cardMargin + 16; // 16px is the gap we set in CSS

nextBtn.addEventListener("click", () => {
  track.scrollBy({ left: scrollAmount, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
  track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});

// ocultar/mostrar botones basado en la posición del desplazamiento
track.addEventListener('scroll', () => {
  const scrollLeft = track.scrollLeft;
  const maxScroll = track.scrollWidth - track.clientWidth;
  
  prevBtn.style.display = scrollLeft <= 0 ? 'none' : 'flex';
  nextBtn.style.display = scrollLeft >= maxScroll ? 'none' : 'flex';
});

// check visibility of buttons
track.dispatchEvent(new Event('scroll'));

const navLinks = document.querySelectorAll('.navbar-link');
navLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    navLinks.forEach(l => l.classList.remove('active'));
    event.target.classList.add('active');
  });
});
const exploreCardsData = [
  {
    id: 1,
    title: '#Dreamscapes is now trending in art!',
    text: '15k posts · See what artists are sharing.',
    category: 'Trending'
  },
  {
    id: 2,
    title: '🎵 Music Collab Contest',
    text: 'Top creators are remixing ambient art sounds—listen and join!',
    category: 'Music'
  },
  {
    id: 3,
    title: '💡 Deco Idea of the Week:',
    text: 'Interactive light installations are making waves at ArtConnect Deco fest.',
    category: 'Deco'
  },
  {
    id: 4,
    title: 'Art Spotlight: Street Murals',
    text: 'Colorful murals are taking over city corners worldwide.',
    category: 'Art'
  }
];
const exploreFeed = document.querySelector('.explore-feed');
const categoryButtons = document.querySelectorAll('.category-btn');
const exploreSearch = document.querySelector('.main-search-bar')

function renderExploreCards(cardsArray) {
  exploreFeed.innerHTML = cardsArray.map(card => `
    <div class="explore-card" data-category="${card.category}">
      <b>${card.title}</b><br>
      <span style="color:#482673;">${card.text}</span>
    </div>
  `).join('');
}
renderExploreCards(exploreCardsData);
categoryButtons.forEach(btn => {
  btn.addEventListener('click', function () {
    categoryButtons.forEach(b => b.classList.remove('selected'));
    this.classList.add('selected');

    const selectedCategory = this.textContent.trim(); 

    if (selectedCategory === 'Trending') {
      renderExploreCards(exploreCardsData);
    } else {
      const filtered = exploreCardsData.filter(card => card.category === selectedCategory);
      renderExploreCards(filtered);
    }
  });
});
exploreSearch.addEventListener('input', function () {
  const query = this.value.toLowerCase();
  const filtered = exploreCardsData.filter(card =>
    card.title.toLowerCase().includes(query) ||
    card.text.toLowerCase().includes(query)
  );
  renderExploreCards(filtered);
});

const navLinks = document.querySelectorAll('.navbar-link');

navLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    navLinks.forEach(l => l.classList.remove('active'));
    event.target.classList.add('active');
  });
});
const communitiesBtn = document.getElementById('communities-btn');
const collageBtn = document.getElementById('collage-btn');
const communitiesSection = document.getElementById('communities-section');
const collageSection = document.getElementById('collage-section');

function showSection(sectionName) {
  if (sectionName === 'communities') {
    communitiesSection.classList.remove('hidden');
    collageSection.classList.add('hidden');

    communitiesBtn.classList.add('selected');
    collageBtn.classList.remove('selected');
  } else if (sectionName === 'collage') {
    communitiesSection.classList.add('hidden');
    collageSection.classList.remove('hidden');

    collageBtn.classList.add('selected');
    communitiesBtn.classList.remove('selected');
  }
}
showSection('communities');
const myCommunities = [
  { name: 'Art Lovers', type: 'joined' },
  { name: 'Indie Musicians', type: 'joined' },
  { name: 'Modern Deco', type: 'joined' }
];

const recommendedCommunities = [
  { name: 'Global Collage', type: 'recommended' },
  { name: 'Creative Ideas', type: 'recommended' },
  { name: 'Storytellers Club', type: 'recommended' }
];

const joinedList = document.querySelector('.community-list');
const recommendedList = document.querySelector('.recommended-list');
joinedList.addEventListener('click', function (event) {
  const item = event.target.closest('.community-list-item');
  if (!item) return;
  const name = item.innerText.trim();
  alert('Opening community: ' + name);
});

recommendedList.addEventListener('click', function (event) {
  const item = event.target.closest('.recommended-list-item');
  if (!item) return;
  const name = item.innerText.trim();
  alert('Request to join community: ' + name);
});
const joinCollageBtn = collageSection.querySelector('button');
const collagePreviewBox = document.querySelector('.collage-preview-box');

joinCollageBtn.addEventListener('click', function () {
  const span = collagePreviewBox.querySelector('span');
  if (span) {
    span.textContent = 'You joined the collage room! (Demo edit applied)';
  }
  alert('Joined collage workspace (demo action).');
});

// ===============================
// 1. NAVBAR ACTIVE STATE
// ===============================
const navLinks = document.querySelectorAll('.navbar-link');

navLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    navLinks.forEach(l => l.classList.remove('active'));
    event.target.classList.add('active');
  });
});


// ===============================
// 2. QUICK BIO BUTTONS
// (uses the existing onclick="setBio(...)")
// ===============================
const bioTextEl = document.getElementById('profile-bio-text');

function setBio(newBio) {
  bioTextEl.textContent = newBio;
}


// ===============================
// 3. EDIT PROFILE (USERNAME + BIO)
// ===============================
const editProfileBtn = document.querySelector('.edit-profile-btn');
const usernameEl = document.getElementById('profile-username');

editProfileBtn.addEventListener('click', function () {
  const currentName = usernameEl.textContent.trim();
  const currentBio = bioTextEl.textContent.trim();

  const newName = window.prompt('Update your display name:', currentName);
  if (newName !== null && newName.trim() !== '') {
    usernameEl.textContent = newName.trim();
  }

  const newBio = window.prompt('Update your bio:', currentBio);
  if (newBio !== null && newBio.trim() !== '') {
    bioTextEl.textContent = newBio.trim();
  }
});


// ===============================
// 4. SIMPLE PROFILE POSTS INTERACTION
// ===============================

const postsBox = document.getElementById('profile-posts');

postsBox.addEventListener('click', function () {
  alert('Opening your posts (demo action).');
});

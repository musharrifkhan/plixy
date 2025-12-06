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
// 2. SETTINGS OPTION ACTIVE STATE
// ===============================
const settingsOptions = document.querySelectorAll('.settings-option');

settingsOptions.forEach(option => {
  option.addEventListener('click', function () {
    settingsOptions.forEach(o => o.classList.remove('active'));
    this.classList.add('active');
  });
});


// ===============================
// 3. SEARCH FILTER FOR SETTINGS
// ===============================
const settingsSearchInput = document.querySelector('.settings-search-bar input');

settingsSearchInput.addEventListener('input', function () {
  const query = this.value.toLowerCase().trim();

  settingsOptions.forEach(option => {
    const text = option.textContent.toLowerCase();
    if (text.includes(query)) {
      option.style.display = 'flex';   // show
    } else {
      option.style.display = 'none';   // hide
    }
  });
});


// ===============================
// 4. OPTIONAL: HEADER TEXT UPDATE
// ===============================
const settingsHeader = document.querySelector('.settings-header');

// Default header
settingsHeader.textContent = 'Settings';

settingsOptions.forEach(option => {
  option.addEventListener('click', function () {
    const label = this.textContent.trim();
    settingsHeader.textContent = 'Settings · ' + label;
  });
});

const posts = [
  {
    id: 1,
    username: 'Satoru Gojo',
    time: '2m ago',
    text: 'Shibuya at nightt',
    img: 'https://i.pinimg.com/1200x/3b/5f/c2/3b5fc27d31c247fd3ca0c38a3edc8b41.jpg',
    avatar: 'https://i.pinimg.com/736x/fd/9e/56/fd9e56e212eb81d2f39bc3ed0ce6fba3.jpg',
    badge: '',
    category: 'Trending',
    likes: 12,
    dislikes: 1,
    likedByUser: false,
    dislikedByUser: false
  },
  {
    id: 2,
    username: 'Megumi Fushigoro',
    time: '8m ago',
    text: "Sooo tiredd!!!! why would'nt he leave me alone!!",
    img: '',
    avatar: 'https://i.pinimg.com/736x/71/f3/77/71f3773959c6d7c98579eca8eb21b954.jpg',
    badge: 'tired AF',
    category: 'My Interests',
    likes: 5,
    dislikes: 0,
    likedByUser: false,
    dislikedByUser: false
  },
  {
    id: 3,
    username: 'Nobara Kugisaki',
    time: '22m ago',
    text: 'Got him under control ^^',
    img: 'https://i.pinimg.com/736x/08/ce/3b/08ce3bd3bc59c4e11188d0098cc2c3d6.jpg',
    avatar: 'https://i.pinimg.com/736x/41/48/c7/4148c7e83d1a2c130f67d6c18dda8ba0.jpg',
    badge: '',
    category: 'Nearby Creators',
    likes: 9,
    dislikes: 0,
    likedByUser: false,
    dislikedByUser: false
  },
  {
    id: 4,
    username: 'Ryomen Sukuna',
    time: '36m ago',
    text: "How'd you like it?",
    img: '',
    avatar: 'https://i.pinimg.com/736x/91/74/ca/9174cab6594a80629302341414086725.jpg',
    badge: 'Contest Winner',
    category: 'Trending',
    likes: 20,
    dislikes: 2,
    likedByUser: false,
    dislikedByUser: false
  }
];
const postsFeed = document.querySelector('.posts-feed');
const filterSelect = document.querySelector('.feed-filter-section select');
const navLinks = document.querySelectorAll('.navbar-link');
const postBtnNav = document.getElementById('postBtnNav');
function renderPosts(postArray = posts) {
  postsFeed.innerHTML = postArray.map(post => `
    <div class="post-card">
      <div class="post-avatar">
        <img src="${post.avatar}" alt="${post.username}">
      </div>
      <div class="post-maincol">
        <div class="post-header-row">
          <span class="post-username">${post.username}</span>
          <span class="post-meta">${post.time}</span>
          ${post.badge ? `<span class="post-badge">${post.badge}</span>` : ''}
        </div>
        <div class="post-text">${post.text}</div>
        ${post.img ? `
          <div class="post-media">
            <img src="${post.img}" alt="Post media">
          </div>
        ` : ''}
        <div class="post-actions">
          <button class="like-btn ${post.likedByUser ? 'active' : ''}"
                  onclick="toggleLike(${post.id})">
            ❤️ ${post.likes}
          </button>
          <button class="dislike-btn ${post.dislikedByUser ? 'active' : ''}"
                  onclick="toggleDislike(${post.id})">
            👎 ${post.dislikes}
          </button>
        </div>
      </div>
    </div>
  `).join('');
}
renderPosts();
function toggleLike(id) {
  const post = posts.find(p => p.id === id);
  if (!post) return;

  if (post.likedByUser) {
    post.likes -= 1;
    post.likedByUser = false;
  } else {
    post.likes += 1;
    post.likedByUser = true;
    if (post.dislikedByUser) {
      post.dislikes -= 1;
      post.dislikedByUser = false;
    }
  }

  renderPosts();
}
function toggleDislike(id) {
  const post = posts.find(p => p.id === id);
  if (!post) return;

  if (post.dislikedByUser) {
    post.dislikes -= 1;
    post.dislikedByUser = false;
  } else {
    post.dislikes += 1;
    post.dislikedByUser = true;
    if (post.likedByUser) {
      post.likes -= 1;
      post.likedByUser = false;
    }
  }

  renderPosts();
}
function filterPosts() {
  const filterValue = filterSelect.value; 
  const filtered = posts.filter(post => post.category === filterValue);
  renderPosts(filtered);
}
function handleNavClick(event) {
  navLinks.forEach(link => link.classList.remove('active'));
  event.target.classList.add('active');
}
function handleNewPostClick() {
  alert('Post creation coming soon!');
}
filterSelect.addEventListener('change', filterPosts);
navLinks.forEach(link => link.addEventListener('click', handleNavClick));
postBtnNav.addEventListener('click', handleNewPostClick);

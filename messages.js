const navLinks = document.querySelectorAll('.navbar-link');

navLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    navLinks.forEach(l => l.classList.remove('active'));
    event.target.classList.add('active');
  });
});
const chats = [
  {
    id: 1,
    name: 'Maisara',
    avatarLetter: 'M',
    lastSeen: 'Last seen 20 min ago',
    group: 'Followers'
  },
  {
    id: 2,
    name: 'Kavya',
    avatarLetter: 'K',
    lastSeen: 'Last seen 2 hours ago',
    group: 'Followers'
  },
  {
    id: 3,
    name: 'Koshi',
    avatarLetter: 'K',
    lastSeen: 'Online',
    group: 'Followers'
  },
  {
    id: 4,
    name: 'Dia',
    avatarLetter: 'D',
    lastSeen: 'Online',
    group: 'Following'
  },
  {
    id: 5,
    name: 'Prachi',
    avatarLetter: 'P',
    lastSeen: 'Last seen 5 min ago',
    group: 'Following'
  }
];
const chatThreadButtons = document.querySelectorAll('.chat-thread-btn');
const chatListContainer = document.querySelector('.chat-list-container');
const chatListTitle = document.querySelector('.chat-list-title');
const chatListUl = document.querySelector('.chat-list-ul');
function renderChats(groupLabel = 'Followers') {
  chatListTitle.textContent = groupLabel + ' Chats';

  const filtered = chats.filter(chat => chat.group === groupLabel);

  chatListUl.innerHTML = filtered.map(chat => `
    <li class="chat-list-item" data-id="${chat.id}">
      <span class="chat-avatar">${chat.avatarLetter}</span>
      <span>${chat.name}</span>
      <span class="last-seen">${chat.lastSeen}</span>
    </li>
  `).join('');
}

renderChats('Followers');

chatThreadButtons.forEach(btn => {
  btn.addEventListener('click', function () {
    chatThreadButtons.forEach(b => b.classList.remove('selected'));
    this.classList.add('selected');

    const label = this.textContent.trim(); 
    renderChats(label);
  });
});
chatListUl.addEventListener('click', function (event) {
  const li = event.target.closest('.chat-list-item');
  if (!li) return;

  const id = Number(li.getAttribute('data-id'));
  const chat = chats.find(c => c.id === id);
  if (!chat) return;

  alert('Opening chat with ' + chat.name + ' (' + chat.lastSeen + ')');
});

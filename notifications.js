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
    // 2. NOTIFICATIONS DATA MODEL
    // ===============================
    const notifications = [
      {
        id: 1,
        avatarLetter: 'A',
        name: 'Musharrif',
        text: 'liked your post.',
        time: '2m ago',
        type: 'all',
        verified: false,
        mention: false,
        read: false
      },
      {
        id: 2,
        avatarLetter: 'V',
        name: 'DIA',
        text: 'commented on your collage!',
        time: '11m ago',
        type: 'verified',
        verified: true,
        mention: false,
        read: false
      },
      {
        id: 3,
        avatarLetter: 'C',
        name: 'CreativePrachi',
        text: 'mentioned you in a post.',
        time: '1h ago',
        type: 'mention',
        verified: false,
        mention: true,
        read: false
      }
    ];

    // ===============================
    // 3. DOM REFERENCES
    // ===============================
    const notifList = document.querySelector('.notification-list');
    const notifButtons = document.querySelectorAll('.notification-btn');

    // ===============================
    // 4. RENDER FUNCTION
    // ===============================
    function renderNotifications(list) {
      notifList.innerHTML = list.map(n => `
        <div class="notification-card ${n.verified ? 'verified' : ''} ${n.read ? 'read' : ''}">
          <span class="notification-avatar">${n.avatarLetter}</span>
          <div>
            <b>${n.name}</b> ${n.text}<br>
            <span style="color:#888; font-size:0.95em;">${n.time}</span>
          </div>
          <div class="notification-actions">
            <button class="mark-btn" onclick="toggleRead(${n.id})">
              ${n.read ? 'Mark as unread' : 'Mark as read'}
            </button>
          </div>
        </div>
      `).join('');
    }

    // Initial render
    renderNotifications(notifications);

    // ===============================
    // 5. FILTER BY TABS (All / Verified / Mentions)
    // ===============================
    notifButtons.forEach(btn => {
      btn.addEventListener('click', function () {
        notifButtons.forEach(b => b.classList.remove('selected'));
        this.classList.add('selected');

        const label = this.textContent.trim();

        let filtered = notifications;
        if (label === 'Verified People') {
          filtered = notifications.filter(n => n.verified);
        } else if (label === 'Mentions') {
          filtered = notifications.filter(n => n.mention);
        } // 'All Notifications' shows all

        renderNotifications(filtered);
      });
    });

    // ===============================
    // 6. TOGGLE READ / UNREAD
    // ===============================
    function toggleRead(id) {
      const notif = notifications.find(n => n.id === id);
      if (!notif) return;

      notif.read = !notif.read;
      // Re-render current view according to active tab
      const activeTab = document.querySelector('.notification-btn.selected').textContent.trim();
      let list = notifications;
      if (activeTab === 'Verified People') {
        list = notifications.filter(n => n.verified);
      } else if (activeTab === 'Mentions') {
        list = notifications.filter(n => n.mention);
      }
      renderNotifications(list);
    }

    // Expose to inline onclick
    window.toggleRead = toggleRead;
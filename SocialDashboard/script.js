let posts = [];
const defaultAvatar = 'https://via.placeholder.com/40';

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    themeToggle.textContent = document.body.classList.contains('light-mode') ? '🌙' : '☀️';
});

// User authentication
const users = [
    { username: 'harshl36', password: 'harsh', avatar: 'dp.jpg' },
    { username: 'user2', password: 'pass2', avatar: 'https://via.placeholder.com/40/00ff00' }
];

function login(username, password) {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        return true;
    }
    return false;
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (login(username, password)) {
        document.getElementById('loginSection').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
        updateUserInfo();
    } else {
        alert('Invalid credentials');
    }
});

function updateUserInfo() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    document.getElementById('currentUsername').textContent = currentUser.username;
    document.getElementById('currentUserAvatar').src = currentUser.avatar || defaultAvatar;
}

function createPost(text, imageFile) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const newPost = {
        id: Date.now(),
        username: currentUser.username,
        avatar: currentUser.avatar || defaultAvatar,
        text: text,
        imageUrl: null,
        timestamp: new Date().toLocaleString(),
        likes: 0,
        comments: []
    };

    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            newPost.imageUrl = e.target.result;
            posts.unshift(newPost);
            displayPosts();
        };
        reader.readAsDataURL(imageFile);
    } else {
        posts.unshift(newPost);
        displayPosts();
    }
}

document.getElementById('postForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const text = document.getElementById('postText').value;
    const imageFile = document.getElementById('postImage').files[0];
    createPost(text, imageFile);
    this.reset();
});

function displayPosts() {
    const feed = document.getElementById('postFeed');
    feed.innerHTML = '';
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        postElement.innerHTML = `
            <div class="post-header">
                <img src="${post.avatar}" alt="${post.username}'s avatar">
                <h3>${post.username}</h3>
            </div>
            <p>${post.text}</p>
            ${post.imageUrl ? `<img src="${post.imageUrl}" alt="Post image">` : ''}
            <p class="timestamp">${post.timestamp}</p>
            <div class="post-actions">
                <button onclick="likePost(${post.id})">👍 (${post.likes})</button>
                <button onclick="showComments(${post.id})">💬 Comments (${post.comments.length})</button>
            </div>
        `;
        feed.appendChild(postElement);
    });
}

function likePost(postId) {
    const post = posts.find(p => p.id === postId);
    if (post) {
        post.likes++;
        displayPosts();
    }
}

function showComments(postId) {
    const post = posts.find(p => p.id === postId);
    if (post) {
        alert(post.comments.join('\n') || 'No comments yet');
    }
}

// Initialize the app
updateUserInfo();
displayPosts();
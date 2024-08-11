// Initialize variables
let posts = JSON.parse(localStorage.getItem('posts')) || [];
let users = JSON.parse(localStorage.getItem('users')) || [];
const defaultAvatar = 'default-avatar.png';

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    themeToggle.textContent = document.body.classList.contains('light-mode') ? '🌙' : '☀️';
    localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
});

// Load saved theme
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
    themeToggle.textContent = '🌙';
}

// User authentication
function register(username, email, password) {
    if (users.find(u => u.username === username)) {
        return false; // Username already exists
    }
    const newUser = { username, email, password, avatar: defaultAvatar };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    return true;
}

function login(username, password) {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        sessionStorage.setItem('currentUser', JSON.stringify(user));
        return true;
    }
    return false;
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    if (login(username, password)) {
        document.getElementById('authSection').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
        updateUserInfo();
        displayPosts();
    } else {
        alert('Invalid credentials');
    }
});

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    if (register(username, email, password)) {
        alert('Registration successful. Please login.');
    } else {
        alert('Username already exists');
    }
});

// User profile
function updateUserInfo() {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    document.getElementById('currentUsername').textContent = currentUser.username;
    document.getElementById('currentUserEmail').textContent = currentUser.email;
    document.getElementById('currentUserAvatar').src = currentUser.avatar || defaultAvatar;
    
    // Update profile section
    document.getElementById('profileAvatar').src = currentUser.avatar || defaultAvatar;
    document.getElementById('profileUsername').value = currentUser.username;
    document.getElementById('profileEmail').value = currentUser.email;
}

document.getElementById('profileForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    currentUser.email = document.getElementById('profileEmail').value;
    
    const avatarFile = document.getElementById('profileAvatarUpload').files[0];
    if (avatarFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            currentUser.avatar = e.target.result;
            updateUserStorage(currentUser);
        };
        reader.readAsDataURL(avatarFile);
    } else {
        updateUserStorage(currentUser);
    }
});

function updateUserStorage(updatedUser) {
    sessionStorage.setItem('currentUser', JSON.stringify(updatedUser));
    const userIndex = users.findIndex(u => u.username === updatedUser.username);
    if (userIndex !== -1) {
        users[userIndex] = updatedUser;
        localStorage.setItem('users', JSON.stringify(users));
    }
    updateUserInfo();
    alert('Profile updated successfully');
}

// Post creation and display
function createPost(text, imageFile) {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
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
            addPostToFeed(newPost);
        };
        reader.readAsDataURL(imageFile);
    } else {
        addPostToFeed(newPost);
    }
}

function addPostToFeed(newPost) {
    posts.unshift(newPost);
    localStorage.setItem('posts', JSON.stringify(posts));
    displayPosts();
    createNotification(newPost.username, 'created a new post');
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
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        if (post.username === currentUser.username) {
            postElement.classList.add('current-user-post');
        }
        postElement.innerHTML = `
            <div class="post-header">
                <div class="post-header-left">
                    <img src="${post.avatar}" alt="${post.username}'s avatar">
                    <h3>${post.username}</h3>
                </div>
                ${post.username === currentUser.username ? `
                    <div class="post-actions">
                        <button onclick="editPost(${post.id})">Edit</button>
                        <button id= "deletepost" onclick="deletePost(${post.id})">Delete</button>
                    </div>
                ` : ''}
            </div>
            <p>${post.text}</p>
            ${post.imageUrl ? `<img src="${post.imageUrl}" alt="Post image">` : ''}
            <p class="timestamp">${post.timestamp}</p>
            <div class="post-interactions">
                <button onclick="likePost(${post.id})">👍 (${post.likes})</button>
                <button onclick="showComments(${post.id})">💬 Comments (${post.comments.length})</button>
            </div>
            <div class="comments-section" id="comments-${post.id}"></div>
        `;
        feed.appendChild(postElement);
    });
}

function editPost(postId) {
    const post = posts.find(p => p.id === postId);
    if (post) {
        const newText = prompt('Edit your post:', post.text);
        if (newText !== null && newText !== post.text) {
            post.text = newText;
            localStorage.setItem('posts', JSON.stringify(posts));
            displayPosts();
        }
    }
}

function deletePost(postId) {
    if (confirm('Are you sure you want to delete this post?')) {
        posts = posts.filter(p => p.id !== postId);
        localStorage.setItem('posts', JSON.stringify(posts));
        displayPosts();
    }
}

// Post interactions
function likePost(postId) {
    const post = posts.find(p => p.id === postId);
    if (post) {
        post.likes++;
        localStorage.setItem('posts', JSON.stringify(posts));
        displayPosts();
        createNotification(post.username, 'someone liked your post');
    }
}

function showComments(postId) {
    const post = posts.find(p => p.id === postId);
    if (post) {
        const commentsSection = document.getElementById(`comments-${postId}`);
        commentsSection.innerHTML = `
            <h4>Comments:</h4>
            ${post.comments.map(comment => `<p>${comment}</p>`).join('')}
            <input type="text" id="commentInput-${postId}" placeholder="Add a comment">
            <button onclick="addComment(${postId})">Add Comment</button>
        `;
    }
}

function addComment(postId) {
    const post = posts.find(p => p.id === postId);
    const commentInput = document.getElementById(`commentInput-${postId}`);
    if (post && commentInput.value) {
        post.comments.push(commentInput.value);
        localStorage.setItem('posts', JSON.stringify(posts));
        showComments(postId);
        createNotification(post.username, 'someone commented on your post');
    }
}

// Notifications
function createNotification(username, action) {
    const notificationArea = document.getElementById('notificationArea');
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = `${username} ${action}`;
    notificationArea.appendChild(notification);
    setTimeout(() => notification.remove(), 5000);
}

// Profile section toggle
document.getElementById('editProfileBtn').addEventListener('click', function() {
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('profileSection').style.display = 'block';
});

document.getElementById('backToDashboardBtn').addEventListener('click', function() {
    document.getElementById('profileSection').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
});

// Initialize the app
function init() {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    if (currentUser) {
        document.getElementById('authSection').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
        updateUserInfo();
        displayPosts();
    }
}

init();
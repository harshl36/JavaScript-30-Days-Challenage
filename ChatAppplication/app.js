let username = '';
let socket;

const statusElement = document.getElementById('status');
const loginContainer = document.getElementById('login-container');
const chatContainer = document.getElementById('chat-container');
const chatWindow = document.getElementById('chat-window');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const themeToggle = document.getElementById('theme-toggle');

function updateStatus(message) {
    statusElement.textContent = message;
    console.log('Status:', message);
}

function connectWebSocket() {
    updateStatus('Connecting to server...');
    socket = new WebSocket('ws://localhost:8080');

    socket.addEventListener('open', () => {
        updateStatus('Connected to server');
    });

    socket.addEventListener('message', (event) => {
        console.log('Received message:', event.data);
        displayMessage(event.data);
    });

    socket.addEventListener('close', () => {
        updateStatus('Disconnected from server. Trying to reconnect...');
        setTimeout(connectWebSocket, 3000);
    });

    socket.addEventListener('error', (error) => {
        updateStatus('WebSocket error: ' + error.message);
    });
}

document.getElementById('login-button').addEventListener('click', () => {
    username = document.getElementById('username-input').value.trim();
    if (username) {
        loginContainer.classList.add('hidden');
        chatContainer.classList.remove('hidden');
        updateStatus('SAMPARK');
        if (socket && socket.readyState === WebSocket.OPEN) {
            socket.send(JSON.stringify({ type: 'login', username }));
        } else {
            updateStatus('WebSocket is not open. Trying to reconnect...');
            connectWebSocket();
        }
    }
});

function sendMessage() {
    const message = messageInput.value.trim();
    if (message && socket && socket.readyState === WebSocket.OPEN) {
        const data = JSON.stringify({ type: 'message', username, message });
        socket.send(data);
        messageInput.value = '';
    } else {
        updateStatus('Cannot send message. Please check your connection.');
    }
}

sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function displayMessage(data) {
    try {
        const { type, username: msgUsername, message } = JSON.parse(data);
        if (type === 'message') {
            const messageElement = document.createElement('div');
            messageElement.classList.add('p-3', 'rounded-lg', 'max-w-[80%]', 'break-words');
            
            const usernameElement = document.createElement('span');
            usernameElement.textContent = msgUsername;
            usernameElement.classList.add('font-semibold', 'mb-1', 'block');
            
            const textElement = document.createElement('span');
            textElement.textContent = message;
            
            messageElement.appendChild(usernameElement);
            messageElement.appendChild(textElement);

            if (msgUsername === username) {
                messageElement.classList.add('ml-auto', 'bg-gradient-to-r', 'from-primary-500', 'to-primary-600', 'text-white');
            } else {
                messageElement.classList.add('bg-gray-200', 'dark:bg-gray-700', 'text-gray-900', 'dark:text-white');
            }
            
            chatWindow.appendChild(messageElement);
            chatWindow.scrollTop = chatWindow.scrollHeight;
        }
    } catch (error) {
        updateStatus('Error displaying message: ' + error.message);
    }
}

themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
});

connectWebSocket();
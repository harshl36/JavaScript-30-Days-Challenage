const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (socket) => {
    console.log('Client connected');

    socket.on('message', (message) => {
        try {
            const data = JSON.parse(message);
            console.log('Received:', data);

            if (data.type === 'login') {
                console.log(`User ${data.username} logged in`);
                // Send custom welcome message
                socket.send(JSON.stringify({
                    type: 'message',
                    username: 'Chai aur Code, ',
                    message: `Hanji ${data.username}`
                }));
                
                // Broadcast to other clients that a new user has joined
                server.clients.forEach((client) => {
                    if (client !== socket && client.readyState === WebSocket.OPEN) {
                        client.send(JSON.stringify({
                            type: 'message',
                            username: 'Chai aur Code',
                            message: `${data.username} has joined the chat`
                        }));
                    }
                });
            } else if (data.type === 'message') {
                console.log(`Broadcasting message from ${data.username}`);
                server.clients.forEach((client) => {
                    if (client.readyState === WebSocket.OPEN) {
                        client.send(JSON.stringify(data));
                    }
                });
            }
        } catch (error) {
            console.error('Error parsing message:', error);
        }
    });

    socket.on('close', () => {
        console.log('Client disconnected');
    });
});

console.log('WebSocket server is running on port 8080');
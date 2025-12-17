const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    console.log('Client connected');

    // Send data to client
    ws.send(JSON.stringify({
        type: 'WELCOME',
        message: 'Connected to WebSocket server'
    }));

    // Receive data from client
    ws.on('message', (data) => {
        console.log('Received:', data.toString());

        // Broadcast to all connected clients
        wss.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify({
                    type: 'BROADCAST',
                    message: data.toString()
                }));
            }
        });
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

console.log('WebSocket server running on ws://localhost:8080');

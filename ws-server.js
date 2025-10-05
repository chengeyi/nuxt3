// ws-server.js
import { WebSocketServer } from 'ws'

const wss = new WebSocketServer({ port: 8080 })

wss.on('connection', (ws) => {
  console.log('Client connected')
  ws.send('Welcome to WebSocket!')

  ws.on('message', (msg) => {
    console.log('Received:', msg.toString())
    ws.send(`Echo: ${msg}`)
  })
})

console.log('WS server running on ws://localhost:8080')

import express from 'express';
import connection from './db/connect';
import { corsSocket, corsOption } from './cors/cors';
import router from './api/api';
import { createServer } from 'http';
import { Server } from 'socket.io';
import socketHandler from './socket/socket';
import cors from 'cors'
import { port } from './data/data';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
const app_port = port;
const httpServer = createServer(app);

const socketio = new Server(httpServer, corsSocket);
socketHandler(socketio);

app.use(cors(corsOption))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(path.join('./static')));
app.use('/', router);

process.once('SIGINT', () => {
    console.log("\nprocess exit");
    connection.end();
})

httpServer.listen(app_port, () => {
    console.log("server start")
})

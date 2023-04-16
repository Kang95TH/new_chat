import { Server, Socket } from 'socket.io';
import connection from '../db/connect';
import moment from 'moment';

export default function socketHandler(io: Server) {
    io.on('connection', (socket: Socket) => {
        console.log('Client connected');

        // callback func when response client msg
        socket.on('message', (data) => {
            console.log(`Received message: ${data}`);

            // send mag for all client
            io.emit('message', data);
        });

        socket.on('btn_event', (data) => {
            console.log("receive success: ", data)
            io.emit("server_msg", data)

            let dateValue = moment().format("YYYY-MM-DD HH:MM:SS");
            connection.query('insert into demo_chat.demo_msg (time, message) values(?, ?)', [
                dateValue, data.body
            ], function (err, result) {
                if (err) throw err;
                console.log("db insert success - result: ", result)
            })
        });

        // callback func when disconnect client
        socket.on('disconnect', () => {
            console.log('Client disconnected');
        });
    });
}
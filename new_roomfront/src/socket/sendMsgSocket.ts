import { socket, initSocketConnection } from "./socket"

// send event
export const sendSocketMessage = (code: any, body: any) => {
    if (socket == null || socket.connected === false) {
        initSocketConnection();
    }
    socket.emit("btn_event", {
        code: code,
        body: body,
    });
};
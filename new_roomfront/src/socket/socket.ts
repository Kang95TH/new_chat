import { io } from "socket.io-client";

export let socket: any = io("http://localhost:5174");

// connect socket
export const initSocketConnection = () => {
    if (socket) return;
    socket.connect();
};

// disconnect socket
export const disconnectSocket = () => {
    if (socket == null || socket.connected === false) {
        return;
    }
    socket.disconnect();
    socket = undefined;
};
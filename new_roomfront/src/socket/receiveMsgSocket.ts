import { socket } from "./socket"

let cbMap = new Map();

// receive event
export const socketInfoReceived = (cbType: any, cb: any) => {
    cbMap.set(cbType, cb);

    if (socket.hasListeners("message")) {
        socket.off("message");
    }

    socket.on("message", (ret: any) => {
        for (let [, cbValue] of cbMap) {
            cbValue(null, ret);
        }
    });
};
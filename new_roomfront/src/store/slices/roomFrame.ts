import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CommonState {
    sRoomList: [roomTitle: string]
}

const initialState: CommonState = {
    sRoomList: [
        "default room"
    ]
};

const RoomListChange = createSlice({
    name: 'roomlist',
    initialState,
    reducers: {
        setRoomList(state, action: PayloadAction<any>) {
            state.sRoomList = action.payload;
        }
    }
});

export const { setRoomList } = RoomListChange.actions;

export { RoomListChange }
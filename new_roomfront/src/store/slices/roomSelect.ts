import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CommonState {
    sRoomSelect: string
}

const initialState: CommonState = {
    sRoomSelect: "initValue"
};

const RoomSelect = createSlice({
    name: 'roomselect',
    initialState,
    reducers: {
        setRoomSelect(state, action: PayloadAction<any>) {
            state.sRoomSelect = action.payload;
        }
    }
});

export const { setRoomSelect } = RoomSelect.actions;

export { RoomSelect }
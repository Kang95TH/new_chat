import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import loggerMiddleware from './loggerMiddleware';
// import { createLogger } from 'redux-logger';
import { RoomListChange } from './slices/roomFrame';
import { RoomSelect } from './slices/roomSelect';

// const logger = createLogger();

const rootReducer = combineReducers({
    roomlist: RoomListChange.reducer,
    roomselect: RoomSelect.reducer,
});

const initialState = {};

export const store = configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
    preloadedState: initialState,
    enhancers: (defaultEnhancers) => [...defaultEnhancers]
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
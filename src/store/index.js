import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, show: true };

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        show(state) {
            state.show = !state.show;
        }

    }
});

const store = configureStore({
    reducer: counterSlice.reducer
});

export const s = 'hello world';
export const counterActions = counterSlice.actions;
export default store;
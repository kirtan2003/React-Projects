import { configureStore } from "@reduxjs/toolkit";
import pasteReducer from '../features/pastes/pasteSlice'

export const pasteStore = configureStore({
    reducer: pasteReducer
})
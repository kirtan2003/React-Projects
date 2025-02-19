import { createSlice} from "@reduxjs/toolkit";
import toast from 'react-hot-toast';
const initialState = {
    pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : []
}

export const pasteSlice = createSlice({
    name: 'paste',
    initialState,
    reducers: {
        addPaste : (state, action) => {
            const paste = action.payload
            const duplicate = state.pastes.some((existingPaste) => existingPaste.title === paste.title);

            if (duplicate) {
                toast("A paste with the same title already exists!");
                return; // Exit without adding the paste
            }
            
            state.pastes.push(paste)
            localStorage.setItem("pastes", JSON.stringify(state.pastes))
            toast.success("Paste added Successfully!")
        },
        updatePaste: (state, action) => {
            state.pastes = state.pastes.map((paste) =>
            paste._id === action.payload._id ? { ...paste, title: action.payload.title, value: action.payload.value, type: action.payload.type } : paste)

            localStorage.setItem("pastes", JSON.stringify(state.pastes))
            toast.success("Paste Updated Successfully!")
        },
        removePaste: (state, action) => {
            state.pastes = state.pastes.filter((paste)=>{
                return paste._id !== action.payload
            })
            localStorage.setItem("pastes", JSON.stringify(state.pastes))
            toast.success("Paste Deleted!")
        },
        removeAllPaste: (state, action) => {
            state.pastes = [];
            localStorage.removeItem("pastes")
            toast.success("All Pastes Removed")
        }

    }
})

export const {addPaste, removePaste, updatePaste,removeAllPaste} = pasteSlice.actions
export default pasteSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const userSlices = createSlice({
    name: 'user',
    initialState:null,
    reducers:{
        addUser: (state, action) =>{
            return action.payload;
        },
        removeUser: () =>{
            return null;
        }
    }
})

export default userSlices.reducer;
export const {addUser, removeUser} = userSlices.actions;
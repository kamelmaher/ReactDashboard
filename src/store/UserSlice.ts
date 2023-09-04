import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type UserState = {
    userName: string;
    name: string;
    email: string;
    role: string;
    status: string;
    company: string;
};
const initialState : UserState = {
    userName: "KamelMaher",
    name: "Kamel",
    email: "kamelmahersh@gmail.com",
    role: "Admin",
    status: "Active",
    company: "Google",
}


export const userSlice = createSlice({
    name: "user",
    initialState, 
    reducers: {
        changeUser: (_state , action: PayloadAction<UserState>) => {
            localStorage.setItem("user", JSON.stringify(action.payload));
            return action.payload
        }
    }
});

export default userSlice.reducer;
export const { changeUser  } = userSlice.actions;
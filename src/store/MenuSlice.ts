import { createSlice } from "@reduxjs/toolkit"

type Menu = {
    show: boolean
}
const initialState : Menu = {
    show: false
}

export const MenuSlice = createSlice({
    name:"menu",
    initialState,
    reducers: {
        showMenu: (state) => {
            state.show = !state.show
        }
    }
})

export default MenuSlice.reducer;
export const {showMenu} = MenuSlice.actions
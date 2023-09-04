import { configureStore } from "@reduxjs/toolkit";
import MenuSlice from "./MenuSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import ThemeSlice from "./ThemeSlice";
import userSlice from "./UserSlice";


export const store = configureStore({
    reducer:{
        menu: MenuSlice,
        theme: ThemeSlice,
        user: userSlice
    }
})

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
    ReturnType<typeof store.getState>
> = useSelector;
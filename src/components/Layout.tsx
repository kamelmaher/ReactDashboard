import { Outlet } from "react-router-dom"
import Header from "./Header"
import Menu from "./Menu"
import MainStyle from "./MainStyle"
import { useEffect } from "react"
import { useAppDispatch } from "../store/store"
import { setTheme } from "../store/ThemeSlice"

const Layout = () => {
    const mainStyle = MainStyle();
    const dispatch = useAppDispatch()
    useEffect(()=>{
        const theme = localStorage.getItem("theme");
        dispatch(setTheme(theme == "true"))
    } , [dispatch])
    return (
        <div className="d-flex" style={{background: mainStyle.background , color: mainStyle.color}}>
            <div>
                <Menu />
            </div>
            <div className="w-100 app">
                <Header />
                <div className="p-3 outlet" >
                    <Outlet></Outlet>
                </div>
                <footer className="text-center">
                    <p>Made  With <span className="fs-3 fw-semibold text-danger">Kamel Maher</span></p>
                </footer>
            </div>
        </div>
    )
}
export default Layout

import { NavLink } from "react-router-dom"
import logo from "../../img/logo.png"
import CloseIcon from '@mui/icons-material/Close';
import { useAppDispatch, useAppSelector } from "../store/store";
import { showMenu } from "../store/MenuSlice";
import MainStyle from "./MainStyle";
const Menu = () => {
    const show = useAppSelector(state => state.menu.show)
    const dark = useAppSelector(state => state.theme.dark)
    const dispatch = useAppDispatch()
    const style = MainStyle()
    return (
        <div className={`sidebar pt-3 ${show ? "active" : ""}`} style={{ color: style.color, background: style.background, boxShadow: "0px 4px 8px -4px rgba(58, 53, 65, 0.42)"}}>
            <div className="logo ps-3 d-flex align-items-center justify-content-between gap-2 mb-4">
                <img src={logo} alt="" width={50} className="img-fluid" />
                <h5 className="fw-medium fs-3" style={{color: style.color}}>Materio</h5>
                <div>
                    <button onClick={() => {
                        dispatch(showMenu());
                    }} className="btn close-menu" style={{color: style.color}}>
                        <CloseIcon />
                    </button>
                </div>
            </div>
            <div className="menu">
                <ul className="list-unstyled" >
                    {[["Dashboard" , ""], ["Account Setting" , "account-setting/account"], ["Login" , "login"], ["Register" , "signup"], "Error", "Account Setting", "Login", "Register"].map((e, index) => {
                        return <NavLink key={index} to={"/" + e[1]} 
                        onClick={() => {
                            dispatch(showMenu())
                        }} 
                        className={({isActive})=> {
                            return `link p-2 mb-2 ps-4 d-block ${dark ? "dark-color" : "light-color"} ${isActive ? "active" : ""}` 
                        }}>
                        {index < 4 ?e[0] : e}</NavLink>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Menu

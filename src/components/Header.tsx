import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import avatarImg from "../../img/avatarImg.png"
import { useAppDispatch } from '../store/store';
import { showMenu } from '../store/MenuSlice';
import { Avatar } from '@mui/material';
import { changeTheme } from '../store/ThemeSlice';
import MainStyle from './MainStyle';
import { useState } from 'react';


const Header = () => {
    const dispatch = useAppDispatch()
    const style = MainStyle();
    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
    const handleResize = () => {
        setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return (
        <div className='p-3 header d-flex justify-content-between' style={{...style , boxShadow: "none"}}>
            <div className='d-flex justify-content-between gap-3'>
                <button className='btn active-menu' onClick={() => {
                    dispatch(showMenu())
                }} style={{color: style.color}}>
                    <MenuIcon />
                </button>
                {screenWidth > 500 && <div className='d-flex input align-items-center'>
                    <SearchIcon />
                    <input type="text" style={{color: style.color}}/>
                </div>}
            </div>
            <div className="icons d-flex gap-2" >
                <button className='btn' onClick={() => {
                    dispatch(changeTheme())
                }} style={{ color: style.color }}>
                    <DarkModeIcon />
                </button>
                <button style={{ color: style.color }} className='btn'>
                    <NotificationsNoneIcon />
                </button>
                <Avatar src={avatarImg}></Avatar>
            </div>
        </div>
    )
}

export default Header

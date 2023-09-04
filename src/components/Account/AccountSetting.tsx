import MainStyle from '../MainStyle';
import Card from '../Home/Card';
import { NavLink, Outlet } from 'react-router-dom';

// Icons
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useState } from 'react';
const AccountSetting = () => {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };
  window.addEventListener('resize', handleResize);
  const style = MainStyle()
  return (
    <div className="p-md-2 p-0" style={{ color: style.color }}>
      <Card>
        <ul className='list-unstyled d-flex gap-3 justify-content-between justify-content-md-start'>
          <li className='account-link'>
            <NavLink className={({isActive})=> {
              return isActive ? "active" : ""
            }} to={"/account-setting/account"}>
              <PermIdentityIcon />
              {screenWidth > 470 && "Account"}
              </NavLink>
          </li>
          <li className='account-link'>
            <NavLink className={({isActive})=> {
              return isActive ? "active" : ""
            }} to={"/account-setting/security"}>
              <LockOpenIcon />
              {screenWidth > 470 && "Security"}
              </NavLink>
          </li>
          <li className='account-link'>
            <NavLink className={({isActive})=> {
              return isActive ? "active" : ""
            }} to={"/account-setting/info"}>
              <InfoOutlinedIcon />
              {screenWidth > 470 && "Info"}
              </NavLink>
          </li>
        </ul>
        <div className=' mt-4'>
          <Outlet />
        </div>
      </Card>
    </div>
  )
}

export default AccountSetting

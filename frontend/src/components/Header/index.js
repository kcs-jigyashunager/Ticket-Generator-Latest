import React from 'react';
import "../Header/header.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import { logout } from '../../redux/actions/authActions';
import { useDispatch } from "react-redux"


const Header = () => {
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(logout());
  };
  return (
    <div className='header-container'>
        <div className='header'> 
          <Link to="/" style={{ textDecoration: 'none' }}><div className='header-logo'>
                TicketGenerator
            </div></Link>
            <div className='icon'>
                <ul className='navigation'>
                    <Link to="/login"><li>Home</li></Link>
                    <Link to="/login"><li onClick={onSubmit}>Logout</li></Link>
                    <li><AccountCircleIcon/></li>
                </ul>
            </div>

        </div>
    </div>
  )
}

export default Header;
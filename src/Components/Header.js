import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../Context/auth-context';

const Header = (props) => {

    const { user, logout } = useContext(AuthContext);


    return ( 
        <header className="header-container">
          <div className="option site-logo">
            <Link style={{textDecoration: "none", color: '#fff', fontSize: '60px'}} to='/'>
                IBC Lottery
            </Link>
            {/* <Link className='text-link'>
                Welcome {user.name}
            </Link> */}
          </div>
          <nav className="navBar">
            <ul className="options">
                {!user && <Link to='/register' class="button create-account-button" style={{verticalAlign: 'middle'}}><span>Create Account </span></Link>}
                {user && <Link to='/' onClick={() => logout()} class="button sign-out-button" style={{verticalAlign: 'middle'}}><span>Sign out </span></Link>}
            </ul>
          </nav>
    </header>
     );
}
 
export default Header;
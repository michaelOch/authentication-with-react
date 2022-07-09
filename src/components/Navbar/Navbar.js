import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../services/auth';
import useLogout from '../../hooks/useLogout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';
import theme from '../../services/theme';

function Header() {
    
    const [toggleMenu, setToggleMenu] = useState(false);

    const { auth } = useAuth();
    const navigate = useNavigate();
    const logout = useLogout();

    const handleLogout = async (e) => {
        await logout();
        navigate('/login');
    }

    return (
        <nav className='navbar navbar-expand-lg'>
            <div className='container-fluid'>
                <Link to='/' className='navbar-brand d-flex align-items-center'>
                    <div className='logo d-inline-block'></div> &nbsp; Auth App
                </Link>
                <button className='navbar-toggler' type='button' data-bs-toggle='offcanvas' data-bs-target='#offcanvasNavbar' onClick={() => setToggleMenu(prev => !prev)}>
                    {/* <span className='navbar-toggler-icon'></span> */}
                    <FontAwesomeIcon 
                        icon={faBars} 
                        color={theme.primary}
                    />
                </button>
                <div className={`offcanvas offcanvas-end ${toggleMenu && 'offcanvas-custom'}`} tabIndex='-1' id='offcanvasNavbar'>
                    <div className='offcanvas-header'>
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Auth App</h5>
                        <button type="button" className='btn-close' data-bs-dismiss="offcanvas" aria-label="Close" onClick={() => setToggleMenu(prev => !prev)}></button>
                    </div>
                    <div className='offcanvas-body'>
                        <ul className='navbar-nav justify-content-end flex-grow-1 pe-3'>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/home'>Home</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/profile'>Profile</Link>
                            </li>
                        </ul>
                        <ul className='navbar-nav justify-content-end flex-grow-1 pe-3'>
                            <li className='nav-item'>
                                <span className='nav-link'>
                                    { auth?.user && `${auth?.user?.name}` }
                                </span>
                            </li>
                            <li className='nav-item'>
                                <Link 
                                    className='btn btn-primary' 
                                    to='/'
                                    onClick={handleLogout}
                                >
                                    Sign Out
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;
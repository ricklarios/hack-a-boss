import { NavLink } from 'react-router-dom';
import './nav.css';

function Nav({ user, performLogout }) {
    return (
        <nav className='header-nav'>
            {user.isUserLogged ? (
                <div>
                    <button onClick={performLogout}>Logout</button>
                </div>
            ) : (
                <ul className='header-ul'>
                    <li>
                        <NavLink to='/login'>Go to Login</NavLink>
                    </li>
                    <li>
                        <NavLink to='/register'>Go to Register</NavLink>
                    </li>
                </ul>
            )}
        </nav>
    );
}

export default Nav;

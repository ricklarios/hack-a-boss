import { Link } from "react-router-dom";

function Header({ user, performLogout }) {
  return (
    <header className="header">
      {user.isUserLogged ? (
        <div>
          <button onClick={performLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <Link to="/login">Login</Link> <Link to="/register">Register</Link>
        </div>
      )}
    </header>
  );
}

export default Header;

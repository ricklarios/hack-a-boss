import { Link } from 'react-router-dom';

function Home({ user }) {
    return (
        <div>
            <h2>Home Page</h2>

            {user.isUserLogged
                ? `Logueado como ${user?.user?.username}`
                : 'sin sesión'}

            <Link to='./profile'>Link a la ruta privada</Link>
        </div>
    );
}

export default Home;

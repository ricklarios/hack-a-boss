function Home({ user }) {
    return (
        <div>
            <h2>Home Page</h2>
            {user.isUserLogged
                ? `Logueado como usuario ${user?.user?.username}`
                : 'Sin sesión'}
        </div>
    );
}

export default Home;

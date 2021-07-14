import { Route, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

function PrivateRoute({ isUserLogged, path, Component, ...rest }) {
    return isUserLogged ? (
        <Route path={path}>
            {isUserLogged ? <Component {...rest} /> : <Link to='/login' />}
        </Route>
    ) : (
        <Redirect to='/public' />
    );
}

export default PrivateRoute;

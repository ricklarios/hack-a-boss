import './App.css';
import { Switch, Route, useHistory } from 'react-router-dom';
import { lazy, Suspense, useState } from 'react';
import Header from './components/header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
// import LoginForm from './pages/login/LoginForm';
// import RegisterForm from './pages/register/RegisterForm';
// import ActivateUser from './pages/activate-user/ActivateUser';
// import Home from './pages/home/Home';

const LoginForm = lazy(() => import('./pages/login/LoginForm'));
const RegisterForm = lazy(() => import('./pages/register/RegisterForm'));
const ActivateUser = lazy(() => import('./pages/activate-user/ActivateUser'));
const Home = lazy(() => import('./pages/home/Home'));

function App() {
    const [user, setUser] = useState({
        user: {},
        isUserLogged: false,
        session: {},
    });
    let history = useHistory();

    function performLogout() {
        setUser({
            user: {},
            isUserLogged: false,
            session: {},
        });
        history.push('/login');
    }

    return (
        <div className='App'>
            <Header user={user} performLogout={performLogout} />
            <Switch>
                <Suspense fallback={<div>Loading...</div>}>
                    <Route path='/login'>
                        <LoginForm setUser={setUser} />
                    </Route>
                    <Route path='/register'>
                        <RegisterForm />
                    </Route>
                    <Route path={'/activate-user'}>
                        <ActivateUser />
                    </Route>
                    <PrivateRoute
                        isUserLogged={user.isUserLogged}
                        path={'/profile'}
                        Component={Profile}
                        user={user}
                    />

                    <Route exact path={'/'}>
                        <Home user={user} />
                    </Route>
                </Suspense>
            </Switch>
        </div>
    );
}

export default App;

// function getTokenFromStorage() {
//   const accessToken = sessionStorage.getItem("accessToken");

//   return accessToken;
// }

function Profile({ user }) {
    return (
        <div>
            <h1>Profile</h1>
            <div>{user.user.username}</div>
            <div>{user.user.email}</div>
        </div>
    );
}

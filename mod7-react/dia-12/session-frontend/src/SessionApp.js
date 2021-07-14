import { Switch, Route, useHistory } from 'react-router-dom';
import './session-app.css';
import ActivateUser from './pages/activate-user/ActivateUser';
import Nav from './components/nav/Nav';

import LoginForm from './pages/login-form/LoginForm';
import RegisterForm from './pages/register-form/RegisterForm';
import Home from './pages/home/Home';
import { useState } from 'react';

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
            <Nav user={user} performLogout={performLogout} />

            <Switch>
                <Route path={'/login'}>
                    <LoginForm setUser={setUser} />
                </Route>
                <Route path={'/register'}>
                    <RegisterForm />
                </Route>
                <Route path={'/activate-user'}>
                    <ActivateUser />
                </Route>
                <Route path={'/'}>
                    <Home user={user} />
                </Route>
            </Switch>
        </div>
    );
}

export default App;

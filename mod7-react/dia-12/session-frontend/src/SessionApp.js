import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './session-app.css';
import ActivateUser from './pages/activate-user/ActivateUser';

import routes from './routes/routes';

function App() {
    return (
        <Router>
            <div className='App'>
                <Switch>
                    {routes.map((route) => (
                        <Route key={route.path} path={route.path}>
                            <route.Page />
                        </Route>
                    ))}
                    <Route path={'/activate-user'}>
                        <ActivateUser />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

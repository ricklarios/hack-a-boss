import LoginForm from '../pages/login-form/LoginForm';
import RegisterForm from '../pages/register-form/RegisterForm';

const routes = [
    {
        path: '/login',
        Page: LoginForm,
    },
    {
        path: '/register',
        Page: RegisterForm,
    },
];

export default routes;

import './login-form.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function LoginForm({ setUser }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    let history = useHistory();

    function onSubmitLogin(event) {
        event.preventDefault();
        console.log(email, password);
        async function performLogin() {
            const response = await fetch(
                'http://localhost/api/auth/users/sessions',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email,
                        password,
                    }),
                }
            );

            const data = await response.json();

            console.log(data);

            if (data.httpStatusCode) {
                // error
                setError(data.message);
            } else {
                // si NO hay error seteo la sesion redirect a /home
                console.log('seteamos la session');
                console.log('redirect a /home');
                setUser({
                    ...data,
                    isUserLogged: true,
                });
                history.push('/');
            }
        }

        performLogin();
    }

    return (
        <div className='login-container'>
            <h1>Login Form</h1>

            <form onSubmit={onSubmitLogin}>
                <label className='field-container'>
                    Email:
                    <input
                        value={email}
                        type='email'
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </label>
                <label className='field-container'>
                    Password:
                    <input
                        label={password}
                        type='password'
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </label>
                <div className='login-button-container'>
                    <input
                        className='login-button'
                        type='submit'
                        value='Login'
                    />
                </div>
                {error && <div className='error-label'>{error} </div>}
            </form>
        </div>
    );
}

export default LoginForm;

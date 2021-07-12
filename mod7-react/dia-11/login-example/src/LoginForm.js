import './login-form.css';
import { useState } from 'react';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    function onSubmitLogin(event) {
        event.preventDefault();
        console.log(email, password);
        fetch('http://localhost/api/auth/users/sessions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
            .then((res) => res.json())
            .then((response) => {
                // response
                console.log(response);
                // si hay un error muestro el error

                if (response.httpStatusCode) {
                    //error
                    setError(response.message);
                } else {
                    //si NO hay error seteo la sesión redirect /home
                    window.location.href = '/home';
                }
            });
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
                <input type='submit' value='Login' />
                {error && <div className='error-label'>{error}</div>}
            </form>
        </div>
    );
}

export default LoginForm;

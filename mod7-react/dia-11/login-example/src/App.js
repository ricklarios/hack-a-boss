import './App.css';
import { useState } from 'react';

function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='App'>
            <h1>Login Form</h1>
            <form>
                <label>Email:</label>
                <input
                    value={email}
                    type='email'
                    onChange={(event) => setEmail(event.target.value)}
                />
                <br />
                <label>Password:</label>
                <input
                    label={password}
                    type='password'
                    onChange={(event) => setPassword(event.target.value)}
                />
                <br />
                <input type='submit' />
                Login
            </form>
            <footer>wrong credentials</footer>
        </div>
    );
}

export default App;

import './App.css';

import Footer from './components/footer/Footer.js';
import { useState } from 'react';

function App() {
    const [text, setText] = useState('');

    return (
        <div className='App'>
            <h1>Es Par o Impar</h1>

            <input onChange={(event) => setText(event.target.value)} />
            <Footer text={text} />
        </div>
    );
}

export default App;

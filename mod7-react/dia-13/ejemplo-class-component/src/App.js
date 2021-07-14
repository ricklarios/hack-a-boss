import './App.css';
import React from 'react';

// componente funcional
// function App() {
//   return (
//     <div className="App">
//       <h1>Functional Component</h1>
//     </div>
//   );
// }

// class component
class App extends React.Component {
    // Aquí solo puede llevar métodos: constructor(), render() o los que definamos
    // pero no definir constantes y otras acciones
    constructor(props) {
        super(props);

        this.state = {
            showCounter: false,
        };
    }
    render() {
        return (
            <div>
                <div className='App'>
                    <h1>className Component</h1>
                    <Welcome name='Dani' />
                    {this.state.showCounter && <Contador />}
                </div>
                <div>
                    <button
                        onClick={() =>
                            this.setState((state) => ({
                                showCounter: !state.showCounter,
                            }))
                        }
                    >
                        {this.state.showCounter
                            ? 'Ocultar contador'
                            : 'Mostrar contador'}
                    </button>
                </div>
            </div>
        );
    }
}

export default App;

class Welcome extends React.Component {
    render() {
        return <div>Hola {this.props.name}!</div>;
    }
}

class Contador extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };
    }

    componentDidMount() {
        console.log('Este componente se está montando');
    }
    componentDidUpdate() {
        console.log('Este componente se está repintando');
    }
    componentWillUnmount() {
        console.log('Este componente se está desmontando');
    }

    incrementarContador() {
        this.setState({ count: this.state.count + 1 });
    }

    // TODO: decrementar contador

    decrementarContador() {
        this.setState((state) => ({ count: state.count - 1 }));
    }

    // TODO: resetear contador

    resetContador() {
        this.setState({ count: 0 });
    }

    render() {
        console.log('re-render');

        return (
            <div>
                <div>Contador: {this.state.count}</div>
                <button onClick={() => this.decrementarContador()}>
                    Decrementar contador
                </button>
                <button onClick={() => this.resetContador()}>
                    Reset contador
                </button>
                <button onClick={() => this.incrementarContador()}>
                    Incrementar contador
                </button>
            </div>
        );
    }
}

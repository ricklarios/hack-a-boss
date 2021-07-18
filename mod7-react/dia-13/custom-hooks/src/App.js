import "./App.css";
import useSessionStorage from "./useLocalStorage";

function App() {
  const [username, setUsername] = useSessionStorage("username");

  return (
    <div className="App">
      <h1>Custom Hook</h1>
      <p>
        Este custom hook crea un estado en react y además persiste su valor en
        el Local Storage (key: username)
      </p>

      <input
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
    </div>
  );
}

export default App;

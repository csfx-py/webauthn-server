import './App.css'
import Client from "webauthn/client";

function App() {
  const client = new Client({
    pathPrefix: "https://https://bewildered-pig-ring.cyclic.app//webauthn",
  });
  const startRegister = async () => {
    await client.register({
      username: "AL1C3",
      name: "Alice",
    });
  };

  const startLogin = async () => {
    await client.login({ username: "AL1C3" });
  };

  return (
    <div className="App">
      <button onClick={startRegister}>Register</button>
      <button onClick={startLogin}>Login</button>
    </div>
  )
}

export default App

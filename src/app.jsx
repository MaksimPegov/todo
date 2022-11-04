import { useState } from "react";
import { Login } from "./components/logIn";
import { Todos } from "./components/todos";
import "./styles.scss";

export function App() {
  const [log, setLog] = useState(!false);

  const login = () => {
    setLog(!log);
  };

  return (
    <div className="root">
      {log ? <Todos logChange={login} />: <Login logChange={login} />}
    </div>
  );
}

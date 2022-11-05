import { useState } from "react";
import { Login } from "./components/logIn";
import { Todos } from "./components/todos";
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom'

import "./styles.scss";
import { Register } from "./components/register";

export function App() {
  const [log, setLog] = useState(!false);

  const login = () => {
    setLog(!log);
  };

  return (
    <div className="root">
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<Register/>}/>
          <Route path="/todos" element={<Todos/>} />
          <Route path="/*" element={<Navigate to="/todos" />} />
        </Routes>
      </BrowserRouter>

      {/* {log ? <Todos logChange={login} />: <Login logChange={login} />} */}
    </div>
  );
}

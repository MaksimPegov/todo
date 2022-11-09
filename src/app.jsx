import { Login } from './components/logIn'
import { Todos } from './components/todos'
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom'

import './styles.scss'
import { Register } from './components/register'

export const App = () => {
  return (
    <div className="root">
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/*" element={<Navigate to="/todos" />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}


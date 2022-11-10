import { Login } from './components/logIn'
import { Todos } from './components/todos'

import './styles.scss'
import { Register } from './components/register'
import { useState } from 'react'
import { useEffect } from 'react'

export const App = () => {
  const [registration, setRegistration] = useState(false)
  const [log, setLog] = useState(false)

  const registerHandler = (status) => {
    setRegistration(status)
  }
  const logHandler = (status) => {
    setLog(status)
  }

  const display = () => {
    if (registration) {
      return <Register registration={registerHandler} log={logHandler} />
    } else if (log) {
      return <Todos log={logHandler} />
    } else {
      return <Login log={logHandler} registration={registerHandler} />
    }
  }

  useEffect(() => {
    if (localStorage.getItem('userID') !== null) {
      setLog(true)
    }
  }, [])

  return <div className="root">{display()}</div>
}


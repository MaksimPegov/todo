import { useNavigate } from 'react-router-dom'
import { accountCheck } from '../helpers/account-check'
import { userCheck } from '../helpers/user-check'
import { addUser } from '../server-request/user-registration'

import './register.scss'

export const Register = () => {
  const navigate = useNavigate()

  const registerHandler = (e) => {
    e.preventDefault()
    const user = {
      username: document.getElementById('uname').value,
      password: document.getElementById('pass').value,
      confirmPassword: document.getElementById('confirmPass').value,
    }
    const newUser = {
      username: user.username,
      password: user.password,
    }

    if (accountCheck(user)) {
      addUser(newUser).then((res) => {
        if (!res.status) {
          alert(res.message)
        } else if (res.status) {
          if (accountCheck(newUser)) {
            userCheck(newUser).then((status) => {
              if (status) {
                navigate('/todos')
                console.log(res.message)
              }
            })
          }
        }
      })
    } else {
      alert('Something went wrong')
    }
  }

  return (
    <div className="RegisterPage">
      <h1 className="RegisterPage__text">Register</h1>
      <p className="RegisterPage__text2">Create your new account here</p>
      <form onSubmit={registerHandler} style={{ display: 'contents' }}>
        <input id="uname" type="text" placeholder="Your username" />
        <input id="pass" type="password" placeholder="Your password" />
        <input id="confirmPass" type="password" placeholder="Confirm your password" />
        <div className="RegisterPage__buttons">
          <button
            onClick={() => {
              registerHandler()
            }}
            className="RegisterPage__buttons__button"
          >
            Create an account
          </button>
          <button
            onClick={() => {
              navigate('/login')
            }}
            className="RegisterPage__buttons__logIn"
          >
            Back to login
          </button>
        </div>
      </form>
    </div>
  )
}


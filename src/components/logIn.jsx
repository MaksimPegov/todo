import { userCheck } from '../helpers/user-check'
import { accountCheck } from '../helpers/account-check'

import './logIn.scss'

export const Login = ({ log, registration }) => {
  const loginHandler = () => {
    let user = {
      username: document.getElementById('uname').value,
      password: document.getElementById('pass').value,
    }

    if (accountCheck(user)) {
      userCheck(user).then((status) => {
        if (status) {
          log(true)
          console.log('You successfully logged in!')
        }
      })
    } else {
      alert('Something went wrong')
    }
  }

  return (
    <div className="LogIn">
      <h1 className="LogIn__text">LogIn</h1>
      <p className="LogIn__text2">Log in here</p>
      <input id="uname" type="text" placeholder="Username" />
      <input id="pass" type="password" placeholder="Password" />
      <div className="LogIn__buttons">
        <button onClick={loginHandler} className="LogIn__buttons__buttonLog">
          Log in
        </button>
        <button
          onClick={() => {
            registration(true)
          }}
          className="LogIn__buttons__register"
        >
          Create an account
        </button>
      </div>
    </div>
  )
}


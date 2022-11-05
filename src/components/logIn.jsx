import { useNavigate } from "react-router-dom"
import { userCheck } from "../helpers/user-check"
import { accountCheck } from "../helpers/account-check"

import "./logIn.scss"

export function Login() {
  const navigate = useNavigate()

  const loginHandler = () => {
    let user = {
      username: document.getElementById("uname").value,
      password: document.getElementById("pass").value
    }

    if(accountCheck(user)){
      userCheck(user).then((status) => {
        if(status){
          navigate("/todos")
          console.log("You successfully logged in!")
        }
      })
    } else return
  }

  return (
    <div className="LogIn">
      <h1 className="LogIn__text">LogIn</h1>
      <p className="LogIn__text2">Log in here</p>
      <input id="uname" type="text" placeholder="Username"/>
      <input id="pass" type="password" placeholder="Password"/>
      <div className="LogIn__buttons">
        <button onClick={loginHandler} className="LogIn__buttons__buttonLog">Log in</button>
      <button onClick={()=>{
        navigate("/register")
      }} className="LogIn__buttons__register">Create an account</button>
      </div>
    </div>
  );
}
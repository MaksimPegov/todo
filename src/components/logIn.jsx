import { useNavigate } from "react-router-dom"
import { userCheck } from "../helpers/user-check"

import "./logIn.scss"

export function Login() {
  const navigate = useNavigate()

  const loginHandler = () => {
    userCheck({
      username: document.getElementById("uname").value,
      password: document.getElementById("pass").value
    }).then(
      (status)=>{
        if(status){
          navigate("/todos")
          console.log("You successfully logged in!")
        }
      }
    )
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
        }} className="LogIn__buttons__register">I'm new here</button>
      </div>
    </div>
  );
}
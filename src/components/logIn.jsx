import { useNavigate } from "react-router-dom";
import { userCheck } from "../helpers/user-check";

export function Login() {
  const navigate = useNavigate();

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
      <h1>LogIn</h1>
      <p>Log in here</p>
      <input id="uname" type="text" placeholder="Username"/>
      <input id="pass" type="password" placeholder="Password"/>
      <button onClick={loginHandler}>Log in</button>
      <button onClick={()=>{
        navigate("/register")
      }}>Register</button>
    </div>
  );
}
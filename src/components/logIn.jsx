import { useNavigate } from "react-router-dom";
import { userCheck } from "../helpers/user-check";

export function Login() {
  const navigate = useNavigate();

  const user = {
    username: "maksim",
    password: "password"
  }

  const loginHandler = () => {
    let status = userCheck(user)
    if(status){
      navigate("/todos")
      console.log("You successfully logged in!")
    }
  }

  return (
    <div className="LogIn">
      <h1>LogIn</h1>
      <p>Log in here</p>
      <input type="text" placeholder="Username"/>
      <input type="password" placeholder="Password"/>
      <button onClick={loginHandler}>Log in</button>
    </div>
  );
}
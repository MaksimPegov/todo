import { login } from "../server-request";

export function Login({logChange}) {

  const user = {
    username: "maksim",
    password: "password"
  }

  const userlogin = () => {
    login(user).then((data) => {
      console.log(data)
      if(data.status){
        logChange()
      }else{
        alert("Wrong username or password")
      }
    })
  }

  return (
    <div className="LogIn">
      <h1>LogIn</h1>
      <p>Log in here</p>
      <input type="text" placeholder="Username"/>
      <input type="password" placeholder="Password"/>
      <button onClick={userlogin}>Log in</button>
    </div>
  );
}
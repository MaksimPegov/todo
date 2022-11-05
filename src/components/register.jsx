import { useNavigate } from "react-router-dom"
import { userCheck } from "../helpers/user-check"

import "./register.scss"

export function Register() {
    const navigate = useNavigate()

    
    const registerHandler = () => {
        
        let user = {
            username: document.getElementById("uname").value,
            password: document.getElementById("pass").value,
            confirmPassword: document.getElementById("confirmPass").value
        }

        
        let newUser = {
          username: user.username,
          password: user.password,
          confirmPassword: user.confirmPassword
        }
        console.log("Your account was successfully created!")
        console.log(newUser)

        localStorage.setItem("userID", "1")
        navigate("/todos")
    }

    return(
        <div className="RegisterPage">
            <h1 className="RegisterPage__text">Register</h1>
            <p1 className="RegisterPage__text2">Create your account </p1>
            <input id="uname" type="text" placeholder="Create an username"/>
            <input id="pass" type="password" placeholder="Create a password"/>
            <input id="confirmPass" type="password" placeholder="Confirm password"/>
            <div className="RegisterPage__buttons">
                <button onClick={() => {
                    registerHandler()
                }} className="RegisterPage__buttons__button">Create an account</button>
                <button onClick={()=>{
                    navigate("/login")
                }} className="RegisterPage__buttons__logIn">I've an account</button>
            </div>
        </div>
    )
}
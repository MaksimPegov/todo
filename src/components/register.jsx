import { useNavigate } from "react-router-dom"
import { accountCheck } from "../helpers/account-check"

import "./register.scss"

export function Register() {
    const navigate = useNavigate()

    
    const registerHandler = () => {   
        let user = {
            username: document.getElementById("uname").value,
            password: document.getElementById("pass").value,
            confirmPassword: document.getElementById("confirmPass").value
        }

        if(accountCheck(user)){
            localStorage.setItem("userID", "1")
            navigate("/todos")
        }
    }

    return(
        <div className="RegisterPage">
            <h1 className="RegisterPage__text">Register</h1>
            <p1 className="RegisterPage__text2">Create your new account here</p1>
            <input id="uname" type="text" placeholder="Your username"/>
            <input id="pass" type="password" placeholder="Your password"/>
            <input id="confirmPass" type="password" placeholder="Confirm your password"/>
            <div className="RegisterPage__buttons">
                <button onClick={() => {
                    registerHandler()
                }} className="RegisterPage__buttons__button">Create an account</button>
                <button onClick={()=>{
                    navigate("/login")
                }} className="RegisterPage__buttons__logIn">Back to login</button>
            </div>
        </div>
    )
}
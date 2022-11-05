import { useNavigate } from "react-router-dom"

export function Register() {

    const navigate = useNavigate()

    return(
        <div className="Register">
            <h1>Register</h1>
            <p1>Create your account here</p1>
            <input type="text" placeholder="Username"/>
            <input type="password" placeholder="Password"/>
            <button>Create an account</button>
            <button onClick={()=>{
                navigate("/login")
            }}>Back</button>
        </div>
    )
}
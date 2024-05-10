import { useNavigate} from "react-router-dom"
import { useState } from "react"
import { useAuth } from "./Security/AuthContext"
export default function LoginComponent(){

    const authContext = useAuth()

    const [username, setUsername] = useState('in28Minutes')
    const [password, setPassword] = useState('')

    const[showErrorMessage, setShowErrorMessage] = useState(false)

    const navigate = useNavigate()
    
    async function handleSubmit(){
        
        if(await authContext.login(username,password)){
            navigate(`/welcome/${username}`)
        }else{
            setShowErrorMessage(true)
           
        }
    }

    function handleUsernameChange(event){
        setUsername(event.target.value)
    }

    function handlePasswordChange(event){
        setPassword(event.target.value)
    }

    return(
        <div className="Login">
            <h1>Please Login to Proceed.</h1> 
            <div className="LoginForm">
                {showErrorMessage && <div className="errorMessage">Authenticated Failed. Please check your credentials.</div>}
                <div>
                    <label>User Name</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type="button" name="Login" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}



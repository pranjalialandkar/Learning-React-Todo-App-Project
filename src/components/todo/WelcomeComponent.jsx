import { useParams, Link} from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import { retriveHelloWorldBean, retriveHelloWorldPathVariable } from "../api/HelloWorldApiService"
import { useAuth } from "./Security/AuthContext"

export default function WelcomeComponent(){

    const {username} = useParams()

    const [message, setMessage] = useState(null)

    const authContext = useAuth()

    function callHelloWorldAPI(){
        //    axios.get('http://localhost:8080/hello-world')
        //    .then((response) => successfulResponse(response))
        //    .catch((error) => errorResponse(error))
        //    .finally( () => console.log('cleanup'))

            // retriveHelloWorldBean()
            // .then((response) => successfulResponse(response))
            // .catch((error) => errorResponse(error))
            // .finally( () => console.log('cleanup'))

            retriveHelloWorldPathVariable('Pranjali')
           .then((response) => successfulResponse(response))
           .catch((error) => errorResponse(error))
           .finally( () => console.log('cleanup'))
    }

    function successfulResponse(response){
        console.log(response)
        setMessage(response.data.message)
    }

    function errorResponse(error){
        console.log(error)
    }

    return(
        <div className="WelcomeComponent">
            <h1>Welcome to in28Minutes.</h1> 
            <div>
                Manage your todos. <Link to="/todos">Click here</Link>
            </div>
            <div>
                <button className="btn btn-success m-5" onClick={callHelloWorldAPI}>Call HelloWorld Rest API</button>
            </div>
            <div className="text-info">{message}  </div>         
          
        </div>
    )
}

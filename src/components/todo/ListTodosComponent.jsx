import { useEffect, useState } from "react"
import { deleteTodoApi,  retriveAllTodosForUsernameApi } from "../api/TodoApiService"
import { useAuth } from "./Security/AuthContext"
import TodoComponent from "./TodoComponent"
import { useNavigate } from "react-router-dom"

export default 
function ListTodosComponent(){

    const authContext = useAuth()

    const username = authContext.username

    const navigate = useNavigate()

    const today = new Date()

    const targetDate = new Date(today.getFullYear()+12,today.getMonth(),today.getDay)

    const [todos, setTodos] = useState([])

    const [message, setMessage] = useState(null)

    useEffect ( () => refreshTodos(), []  )

    function refreshTodos(){
        retriveAllTodosForUsernameApi(username)
        .then(response => { setTodos(response.data) } )
        .catch(error => console.log(error))
    }
   
    function deleteTodo(id){
        deleteTodoApi(username, id)
        .then(() => {
            setMessage(`Delete of Todo with id = ${id} is successful.`)
            refreshTodos()
        } )
        .catch(error => console.log(error))
    }

    function updateTodo(id){
        console.log('Clicked '+id)
        navigate(`/todo/${id}`)

        
    }

    function addTodo(){
        navigate(`/todo/-1`)
        
    }

    return(
        <div className="container">
            <h1>Things you want to do.</h1>
            {message && <div className="alert alert-warning">{message}</div>}
            
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Is done?</th>
                            <th>Target Date</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                        <td><button className="btn btn-warning" onClick={() => deleteTodo(todo.id)}>Delete</button></td>
                                        <td><button className="btn btn-success" onClick={() => updateTodo(todo.id)}>Update</button></td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
            <div className="btn btn-success m-5" onClick={addTodo}>Add New Todo</div>
        </div>
    )
}

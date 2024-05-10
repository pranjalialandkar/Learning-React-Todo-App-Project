import { Component, useState } from "react"
import { BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import HeaderComponent from './HeaderComponent'
import LoginComponent from './LoginComponent'
import WelcomeComponent from './WelcomeComponent'
import ListTodosComponent from './ListTodosComponent'
import LogoutComponent from './LogoutComponent'
import ErrorComponent from './ErrorComponent'
import FooterComponent from './FooterComponent'
import AuthProvider, {useAuth} from "./Security/AuthContext"
import './Todo.css'
import TodoComponent from "./TodoComponent"

function AuthenticatedRoute({children}){
    const authContext = useAuth()
   
    if(authContext.isAuthenticated)
        return children

    return <Navigate to="/" />
}

export default function TodoApp() {
    return(
        <div className="TodoApp">
            <AuthProvider>
                <BrowserRouter>
                    <HeaderComponent/>
                        <Routes>
                            <Route path="/" element={<LoginComponent />}></Route>
                            <Route path="/login" element={<LoginComponent />}></Route>

                            <Route path="/welcome/:username" element={
                                <AuthenticatedRoute>
                                    <WelcomeComponent />
                                </AuthenticatedRoute>
                            }/>

                            <Route path="/todos" element={
                            <AuthenticatedRoute>
                                <ListTodosComponent />
                            </AuthenticatedRoute>    
                            }/>
                            

                            <Route path="/logout" element={
                            <AuthenticatedRoute>
                                <LogoutComponent />
                            </AuthenticatedRoute>
                            }/>

                            <Route path="/todo/:id" element={
                            <AuthenticatedRoute>
                                <TodoComponent />
                            </AuthenticatedRoute>    
                            }/>

                            <Route path="*" element={<ErrorComponent />}/>
                        </Routes>
                    
                </BrowserRouter>
            </AuthProvider>
            
        </div>
    )
}





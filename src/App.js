import { useState, useEffect } from 'react'
import {Title} from './components/Title/Title'
import {FormContainer} from './components/FormContainer/FormContainer'
import {TaskList} from "./components/TaskList/TaskList";
export const App = () => {

    const [tasks, setTask] = useState("")
    const [todos, setTodos] = useState([])
    const [status, setStatus] = useState('all')
    const [filteredTodos, setFilteredTodos] = useState([])
    useEffect(() =>{
        saveToLS()
        getFromLs()
    }, [])
    useEffect(() => {
        filterHandler()
    }, [todos, status])
    const filterHandler = () => {
        switch (status){
            case 'complete':
                setFilteredTodos(todos.filter(todo => todo.completed === true))
            break
            case 'uncompleted':
                setFilteredTodos(todos.filter(todo => todo.completed === false))
            break
            default:
                setFilteredTodos(todos)
            break
        }
    }
    const saveToLS = () => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }
    const getFromLs = () => {
        if (localStorage.getItem('todos') === null){
            localStorage.setItem('todos', JSON.stringify([]))
        } else {
            let todoLocal = JSON.parse(localStorage.getItem('todos'))
            setTodos(todoLocal)
        }
    }
return (
    <div className="app">
        <Title/>
        <FormContainer  setStatus ={setStatus} tasks = {tasks}  todos = {todos} setTodos ={setTodos} setTask ={setTask}/>
        <TaskList filteredTodos ={filteredTodos} todos = {todos} setTodos = {setTodos}/>

    </div>

)
}
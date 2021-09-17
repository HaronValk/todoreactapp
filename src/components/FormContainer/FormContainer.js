import {StyledFormContainer} from './FormContainer.styles'

import { nanoid } from 'nanoid'

export const FormContainer = ({setTask, todos, setTodos, tasks, setStatus}) => {
    const textChange = (evt) => {
        evt.preventDefault()
        if (evt.target.value.trim() !== ''){
            setTask(evt.target.value)
        }


    }
    const textSubmit = (evt) => {
        evt.preventDefault()

       setTodos([
           ...todos, {
           text: tasks,
               completed: false,
               id: nanoid(),
               date: new Date().toLocaleString()
           }
       ])
        setTask('')
    }
    const statusHandler = (evt) => {
            setStatus(evt.target.value)
    }
    return (
        <form action="#" className="form">
            <StyledFormContainer>
                <legend>Добавить задачу</legend>
                <input value={tasks} onChange={textChange} type="text" name='task' placeholder='Введите текст'/>
                <button  onClick={textSubmit} type="button">Добавить</button>
                <select onChange={statusHandler} name="category" id="category">
                    <option value="all">Все</option>
                    <option value="complete">Завершена</option>
                    <option value="uncompleted">В работе</option>
                </select>
            </StyledFormContainer>
        </form>
    )
}
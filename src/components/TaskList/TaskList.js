import {StyledList} from './TaskList.styles'

import {Todo} from './../Todo/Todo'
export const TaskList = ({todos, setTodos, filteredTodos}) => {
    return (
        <StyledList className="task-list">
            {filteredTodos.map((el) => {
                return <Todo todo ={el} todos = {todos} setTodos = {setTodos}  key={el.id} text = {el.text} id = {el.id} date={el.date}/>
            })}
        </StyledList>
    )
}
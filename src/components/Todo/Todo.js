import {StyledTodo} from "./Todo.styles";

export const  Todo = ({text, date, todos, setTodos, todo}) => {
    const deleteBtn = (evt) => {
        setTodos(todos.filter(el => el.id !== todo.id) )
    }
    const completeBtn = (evt) => {
        setTodos(todos.map((el) => {
            if (el.id === todo.id){
                return {...el, completed: !el.completed}
            }
            return el
        }) )
    }
    return (
        <StyledTodo  nameS={todo.completed? true: ''}>
           <p>{text} <small>{date}</small></p>

            <button onClick={completeBtn} className="completed">Выполнено</button>
            <button onClick={deleteBtn} className="delete">Удалить</button>
        </StyledTodo>
    )
}
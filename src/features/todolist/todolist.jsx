import { useRef, useState } from "react";
import { useAddNewTodoMutation, useGetAllTodosQuery, useLazyGetAllTodosQuery, useUpdateTodoMutation, useDeleteTodoMutation } from "../../services/todosApi";

function Todolist() {
    const { isLoading, data: todos } = useGetAllTodosQuery();
    const [ntd, setNtd] = useState();
    const [addNewTodoFn] = useAddNewTodoMutation();
    const [LazyGetAllTodos] = useLazyGetAllTodosQuery();
    const [updateTodoFn] = useUpdateTodoMutation();
    const [deleteTodoFn] = useDeleteTodoMutation();
    const [selectedTodo, setSelectedTodo] = useState(null);
    const inp = useRef();
    function handleAddNewTodo() {
        addNewTodoFn({ "title": ntd, "status": "not completed" }).then(()=>{
        LazyGetAllTodos();
        });
    }
    function undoTodo(todo) {
        const updatedTodo = { ...todo, status: "not completed" }
        updateTodoFn(updatedTodo).then(()=>{
        LazyGetAllTodos();
        });
    }
    function doneTodo(todo) {
        const updatedTodo = { ...todo, status: "completed" }
        updateTodoFn(updatedTodo).then(()=>{
        LazyGetAllTodos();
        });
    }
    function handleDeleteTodo(todo) {
        deleteTodoFn(todo.id).then(()=>{
        LazyGetAllTodos();
        });
    }
    function handleEditTodo(todo) {
        setSelectedTodo(todo);
        inp.current.focus();
        inp.current.value = todo.title;
    }
    function handleUpdateTodo(){
        const updatedTodo={...selectedTodo, title:ntd}
        updateTodoFn(updatedTodo).then(()=>{
            LazyGetAllTodos();
            setSelectedTodo(null);
            inp.current.value="";
        })
    }
    return (
        <div>
            <h1>Todolist</h1>
            <input type="text" placeholder="Enter todo" onChange={(ev) => setNtd(ev.target.value)} ref={inp} />
            {!selectedTodo && <button onClick={() => {
                handleAddNewTodo()
            }}>Add Todo</button>}
            {selectedTodo && <button onClick={()=>handleUpdateTodo()}>Update Todo</button>}
            {isLoading && <h3>Loading...</h3>}
            {!isLoading &&
                <ul>
                    {todos?.map(todo => {
                        return <li style={{ textDecoration: todo.status === 'completed' ? 'line-through' : 'none' }}>
                            {todo.title}
                            <button onClick={() => {
                                handleEditTodo(todo);
                            }}>Edit</button>
                            {todo.status == "completed" && <button onClick={() => undoTodo(todo)}>Undo</button>}
                            {todo.status == "not completed" && <button onClick={() => doneTodo(todo)}>Done</button>}
                            <button onClick={() => handleDeleteTodo(todo)}>Delete</button>
                        </li>
                    })}
                    
                    {console.log(todos)}
                </ul>
            }
        </div>
    )
}

export default Todolist;
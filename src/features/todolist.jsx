import { useGetAllTodosQuery } from "../../services/todosApi";

function Todolist() {
    const { isLoading, data } = useGetAllTodosQuery()
    return (
        <div>
            <h1>Todolist</h1>
            {isLoading && <h3>Loading...</h3>}
            {!isLoading &&
                <ul>
                    {data?.todos.map(todo=>{
                        return <li>{todo}</li>
                    })}
                </ul>
            }
        </div>
    )
}

export default Todolist;
const Todo = (props) => {
    //properties truyen du lieu qua lai giua cac component
    //parent => child , top => bottom
    //const todos = props.todos;
    const { todos, title, DeleteDataTodo } = props;

    const handleDelete = (id) => {
        DeleteDataTodo(id);
    };
    return (
        <div className="todos-container">
            <div className="title">{title}</div>
            {todos.map((todo, index) => {
                return (
                    <div key={todo.id}>
                        <div className="todo-child">
                            {index + 1} - {todo.title} <></>
                            <span onClick={() => handleDelete(todo.id)}>X</span>
                        </div>
                    </div>
                );
            })}

            <hr style={{ width: "250px" }} />
        </div>
    );
};

export default Todo;

const Todo = (props) => {
    //properties truyen du lieu qua lai giua cac component
    //parent => child , top => bottom
    const todos = props.myData;
    return (
        <div className="todos-container">
            {todos.map((todo, index) => {
                return (
                    <div className="todo-child" key={todo.id}>
                        {index + 1} - {todo.title}
                    </div>
                );
            })}
        </div>
    );
};

export default Todo;

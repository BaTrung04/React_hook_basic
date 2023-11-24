import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import { useState } from "react";
import userEvent from "@testing-library/user-event";
import Todo from "./views/Todo";

//template + logic
// JSX
// Babel

const App = () => {
    // tra ve 2 phan tu 1: value 2: function xu ly // Destructuring
    let [name, setName] = useState("BaTrung");

    const [address, setAddress] = useState("");
    const [todos, setTodos] = useState([
        { id: "todo1", title: "Watching it hook react" },
        { id: "todo2", title: "Doing homework" },
        { id: "todo3", title: "Playing game" },
    ]);

    const handleEventOnChange = (event) => {
        setAddress(event.target.value);
    };

    const handleEventClick = (event) => {
        if (!address) {
            alert("empty input");
            return;
        }
        // hook not merge state
        let newTodo = { id: "abc", title: address };
        setTodos([...todos, newTodo]);
        setAddress("");
    };

    //re-render tao lai - du lieu ra ngoai man hinh
    return (
        <div className="App">
            <Nav />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>REACT HOOK BY {name}!</h1>
                <Todo myData={todos} />
                <input
                    type="text"
                    value={address}
                    onChange={(event) => handleEventOnChange(event)}
                ></input>
                <button
                    style={{ marginTop: "10px" }}
                    type="button"
                    onClick={(event) => handleEventClick(event)}
                >
                    Click me
                </button>
            </header>
        </div>
    );
};

export default App;

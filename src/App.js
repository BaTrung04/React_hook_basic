import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import { useState, useEffect } from "react";
import userEvent from "@testing-library/user-event";
import Todo from "./views/Todo";
import Covid from "./views/Covid";
import { CountDown, NewCountDown } from "./views/Countdown";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//template + logic
// JSX
// Babel

const App = () => {
    // tra ve 2 phan tu 1: value 2: function xu ly // Destructuring
    let [name, setName] = useState("BaTrung");

    const [address, setAddress] = useState("");
    const [todos, setTodos] = useState([
        { id: "todo1", title: "Watching it hook react", type: "BaTrung" },
        { id: "todo2", title: "Doing homework", type: "BaTrung" },
        { id: "todo3", title: "Playing game", type: "BaTrung2" },
        { id: "todo4", title: "Reading book", type: "BaTrung4" },
    ]);

    //didmount
    useEffect(() => {
        // console.log("run use effect");
    }, [address]);
    useEffect(() => {
        // console.log("run use effect todos");
    }, [todos]);

    const handleEventOnChange = (event) => {
        setAddress(event.target.value);
    };

    const handleEventClick = (event) => {
        if (!address) {
            alert("empty input");
            return;
        }
        // hook not merge state
        let newTodo = {
            id: Math.floor(Math.random() * 10000 + 1),
            title: address,
            type: "Eric",
        };
        setTodos([...todos, newTodo]);
        setAddress("");
    };

    const DeleteDataTodo = (id) => {
        let currentTodos = todos;
        currentTodos = currentTodos.filter((item) => item.id !== id);
        setTodos(currentTodos);
    };

    const onTimesup = () => {
        //   alert("time up");
    };
    //re-render tao lai - du lieu ra ngoai man hinh
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Nav />
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>REACT HOOK BY {name}!</h1>
                </header>
                <Switch>
                    <Route path="/" exact={true}>
                        <Covid />
                    </Route>
                    <Route path="/timer">
                        <CountDown onTimesup={onTimesup} />
                        <hr style={{ width: "300px" }} />
                        <NewCountDown onTimesup={onTimesup} />
                    </Route>
                    <Route path="/todo">
                        <Todo
                            todos={todos}
                            title={"All todos"}
                            DeleteDataTodo={DeleteDataTodo}
                        />
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
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;

import reactLogo from "./assets/react.svg";
import reduxLogo from "/redux.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const counter = useSelector((state: any) => state.counterReducer.counter);
  const amount = useSelector((state: any) => state.phoneReducer.amount);
  const dispatch = useDispatch();

  const up = () => dispatch({ type: "UP" });
  const down = () => dispatch({ type: "DOWN" });

  const add = () => dispatch({ type: "ADD", payload: 200 });
  const del = () => dispatch({ type: "DEL", payload: 50 });

  return (
    <>
      <div>
        <a href="https://redux.js.org/" target="_blank">
          <img src={reduxLogo} className="logo" alt="Redux logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>`
      <h1>Redux + React</h1>
      <div className="card">
        <p>Counter {counter}</p>
        <button onClick={up}>UP</button>
        <button onClick={down}>DOWN</button>
      </div>
      <div className="card">
        <p>Phone {amount}</p>
        <button onClick={add}>ADD</button>
        <button onClick={del}>DELETE</button>
      </div>
    </>
  );
}

export default App;

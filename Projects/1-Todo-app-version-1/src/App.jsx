import AppName from "./Components/AppName"
import AddTodo from "./Components/TodoAdd";
import TodoItem1 from "./Components/TodoItem1"
import TodoItem2 from "./Components/TodoItem2"
import './App.css';


  function App() {
    
    return (
  <>

  <h1></h1>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <div className="items-container">
          <TodoItem1></TodoItem1>
          <TodoItem2></TodoItem2>
        </div>
      </center>
      </>
    );
  }

export default App

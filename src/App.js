import './App.css'
import TodoApp from './Components/TodoApp'

function App() {
  return (
    <div className="App">
      <h1>Todolist App - mahtab</h1>
      <TodoApp/>
    </div>
  );
}

export default App;


//TodoApp
//TodoForm => input + button => add
//TodoList => Todos.map(...) =>
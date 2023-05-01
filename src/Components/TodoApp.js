import { useEffect, useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import NavBar from "./NavBar";

const TodoApp = () => {
  const [selectedOption, setSelectedOption] = useState("All");
  const [todos, setTodos] = useState([]);
  const [filterdTodos, setFilterdTodos] = useState([]);

  useEffect(()=>{
    filterTodos(selectedOption.value)
  },[todos , selectedOption])

  const addTodo = (input) => {
    // console.log(input);
    const NewTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
    };
    setTodos([...todos, NewTodo]);
  };

  const CompleteTodo = (id) => {
    // console.log(id);
    const Index = todos.findIndex((p) => p.id === id);
    const selectedtodo = { ...todos[Index] };
    selectedtodo.isCompleted = !selectedtodo.isCompleted;
    console.log(selectedtodo);
    const updatedtodo = [...todos];
    updatedtodo[Index] = selectedtodo;
    setTodos(updatedtodo);
  };

  const deleteHandeler = (id) => {
    const Index = todos.filter((p) => p.id !== id);
    setTodos(Index);
  };

  const updatedTodo = (id, newValue) => {
    const Index = todos.findIndex((todo) => todo.id === id);
    const selectedtodo = { ...todos[Index] };
    selectedtodo.text = newValue;
    const updatedTodos = [...todos];
    updatedTodos[Index] = selectedtodo;
    setTodos(updatedTodos);
  };

  const filterTodos = (status) => {
    switch (status) {
      case "All":
        setFilterdTodos(todos);
        break;
      case "Completed":
        setFilterdTodos(todos.filter((t) => t.isCompleted));
        break;
      case "unCompleted":
        setFilterdTodos(todos.filter((t) => !t.isCompleted));
        break;
      default:
        setFilterdTodos(todos);
    }
  };
  const selectHandeler =(e)=>{
    setSelectedOption(e)
    filterTodos(e.value)
  }
  return (
    <div className="container">
      <NavBar
        unCompletedTodos={todos.filter((t) => !t.isCompleted).length}
        selectedOption={selectedOption}
        onChange={selectHandeler}
      />
      <TodoForm submitTodo={addTodo} />
      <TodoList
        todos={filterdTodos}
        onComplete={CompleteTodo}
        onDelete={deleteHandeler}
        onUpdateTodo={updatedTodo}
      />
    </div>
  );
};

export default TodoApp;

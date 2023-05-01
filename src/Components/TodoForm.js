import { useEffect, useRef, useState } from "react";

const TodoList = ({ edit, submitTodo }) => {
  const inputRef = useRef(null);
  const [input, setInput] = useState(edit ? edit.text : "");

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const changeHnadler = (e) => {
    setInput(e.target.value);
  };

  const submitHandeler = (e) => {
    e.preventDefault();

    if (!input) {
      alert("enter todo!");
      return;
    }
    submitTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={submitHandeler}>
      <div className="formControl">
        <input
          type="text"
          value={input}
          onChange={changeHnadler}
          placeholder={edit ? "Update todo ..." : "Add new todo ..."}
          ref={inputRef}
        />
        <button
          className={`btn ${edit ? "updateTodo" : "addTodo"}`}
          type="submit"
        >
          {edit ? "Update" : "Add"}
        </button>
      </div>
    </form>
  );
};

export default TodoList;

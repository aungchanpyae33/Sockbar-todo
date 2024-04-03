import React from "react";
import { useRef } from "react";

interface Task {
  id: number;
  text: string;
  check: boolean;
}

function InputForm() {
  const [input, setinput] = React.useState("");
  const [tasks, setTasks] = React.useState<Task[]>([]);
  const [create, setcreate] = React.useState(false);
  const inputFocus = useRef<HTMLInputElement>(null);
  return (
    <>
      {create && (
        <form
          className="flex w-[50%] border-red-600 bg-green-900 mx-auto flex-wrap"
          onSubmit={(event) => {
            event.preventDefault();
            const newTask = { id: Date.now(), text: input, check: false };
            const data = [...tasks, newTask];
            setTasks(data);
            setinput("");
            inputFocus.current && inputFocus.current.focus();
          }}
        >
          <input
            type="text"
            value={input}
            ref={inputFocus}
            placeholder="type title"
            className="border border-red-500
            w-full"
            onChange={(event) => {
              setinput(event.target.value);
            }}
          />
          <button type="submit" className="button">
            <i
              className="fa-solid fa-plus
      border-2 border-blue-400
      p-1 rounded-full bg-blue-300
      text-3xl
      "
            ></i>
          </button>
          {tasks.map((item) => (
            <div className="container" key={item.id}>
              <input
                type="checkbox"
                value={""}
                checked={item.check}
                onChange={() => {
                  const arr = tasks.map((task) =>
                    task.id === item.id ? { ...task, check: !task.check } : task
                  );
                  setTasks(arr);
                }}
              />
              <span>{item.text}</span>
              <button
                key={item.id}
                onClick={() => {
                  const TaskId = item.id;
                  const arr = tasks.filter((task) => task.id !== TaskId);
                  setTasks(arr);
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </form>
      )}
      <button
        className={!create ? "button" : "hide-button"}
        onClick={() => {
          setcreate(true);
        }}
      >
        Create
      </button>
    </>
  );
}
export default InputForm;

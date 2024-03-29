"use client";

import { createTodo, deleteTodo } from "@/todos/actions/todo-action";
import { FormEvent, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";

export const NewTodo = () => {


  const [task, setTask] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (task.trim().length === 0) return;
    createTodo(task);

  };


  return (
    <form className="flex w-full" onSubmit={onSubmit}>
      <input
        onChange={(e) => setTask(e.target.value)}
        value={task}
        id="todo"
        type="text"
        className="w-6/12 -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
        placeholder="¿Qué necesita ser hecho?"
      />

      <button
        type="submit"
        className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all"
      >
        Crear
      </button>

      <span className="flex flex-1"></span>

      <button
        onClick={()=>deleteTodo()}
        type="button"
        className="flex items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all"
      >
        <IoTrashOutline />
        Delete
      </button>
    </form>
  );
};

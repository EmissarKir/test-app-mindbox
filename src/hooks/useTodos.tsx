import React, { createContext, useContext, useState } from "react";
import { FilterPropView, ITodo, filterPropView } from "../types";

interface TodosContextInterface {
  todos: ITodo[];
  sortTodos: ITodo[];
  filter: FilterPropView;
  setTodos: any;
  isCompleted: boolean;
  handleClearComplete: () => void;
  toggleFilter: (filter: FilterPropView) => void;
  removeTodo: (id: number) => void;
  toggleComplete: (id: number) => void;
  addTodo: (todo: string) => void;
}
const initialState = {
  todos: [],
  sortTodos: [],
  filter: filterPropView[0],
  setTodos: () => null,
  isCompleted: false,
  handleClearComplete: () => null,
  toggleFilter: () => null,
  removeTodo: () => null,
  toggleComplete: () => null,
  addTodo: () => null,
};

export const TodosContext = createContext<TodosContextInterface>(initialState);

export const useTodos = () => {
  return useContext(TodosContext);
};
type TodosProviderProps = {
  children: React.ReactNode;
};

function sort(todos: ITodo[], filter: FilterPropView): ITodo[] {
  switch (filter) {
    case "completed":
      return todos.filter((todo) => todo.completed === true);
    case "active":
      return todos.filter((todo) => todo.completed === false);
    default:
      break;
  }
  return todos;
}

export const TodosProvider = ({ children }: TodosProviderProps) => {
  const [todos, setTodos] = useState<ITodo[] | []>([]);
  const [filter, setFilter] = useState<FilterPropView>("all");
  const sortTodos = sort(todos, filter);
  const isCompleted = todos.some((item) => item.completed === true);

  const addTodo = (todo: string) => {
    setTodos((prevState) => [
      { name: todo, completed: false, id: new Date().getTime() },
      ...prevState,
    ]);
  };
  const toggleComplete = (id: number) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };
  const removeTodo = (id: number) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };
  const toggleFilter = (filter: FilterPropView) => {
    setFilter(filter);
  };
  const handleClearComplete = () => {
    setTodos((prevState) =>
      prevState.filter((todo) => todo.completed === false)
    );
  };

  return (
    <TodosContext.Provider
      value={{
        todos,
        setTodos,
        filter,
        sortTodos,
        isCompleted,
        handleClearComplete,
        toggleFilter,
        removeTodo,
        toggleComplete,
        addTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

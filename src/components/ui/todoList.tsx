import { FC } from "react";
import { AnimatePresence, Reorder } from "framer-motion";
import { ITodo } from "../../types";
import { TodoItem } from "./todoItem/todoItem";
import { useTodos } from "../../hooks/useTodos";

type TodoListProps = {
  items: ITodo[];
};

export const TodoList: FC<TodoListProps> = ({ items }) => {
  const { toggleComplete, removeTodo, setTodos } = useTodos();

  return (
    <Reorder.Group axis="y" values={items} onReorder={setTodos}>
      <AnimatePresence>
        {items.map((item, index) => (
          <Reorder.Item key={item.id} value={item}>
            <TodoItem
              key={item.id}
              todo={item}
              onComplete={toggleComplete}
              onRemove={removeTodo}
              index={index}
            />
          </Reorder.Item>
        ))}
      </AnimatePresence>
    </Reorder.Group>
  );
};

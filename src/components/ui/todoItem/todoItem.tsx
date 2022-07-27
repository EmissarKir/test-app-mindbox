import { FC } from "react";
import { ITodo } from "../../../types";
import { CheckboxField } from "../../common/form";
import { SIconCross, STodoItem } from "./todoItem.style";

const variants = {
  hidden: {
    opacity: 0,
  },
  visible: (delay: number) => ({
    opacity: 1,
    transition: {
      delay,
      duration: 1,
    },
  }),
};

type TodoItemProps = {
  todo: ITodo;
  onComplete: (id: number) => void;
  onRemove: (id: number) => void;
  index: number;
};

export const TodoItem: FC<TodoItemProps> = ({
  todo,
  onComplete,
  onRemove,
  index,
}) => {
  return (
    <STodoItem
      custom={{ delay: (index + 1) * 0.1 }}
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
    >
      <CheckboxField
        name={todo.name}
        inputId={todo.id}
        label={todo.name}
        onChange={onComplete}
        checked={todo.completed}
        size={30}
      />
      <SIconCross onClick={() => onRemove(todo.id)} />
    </STodoItem>
  );
};

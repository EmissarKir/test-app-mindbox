import { ChangeEvent, FC, FormEvent, useState } from "react";
import styled from "styled-components";
import { TextField } from "../../common/form";
import { useTodos } from "../../../hooks/useTodos";

export const AddTodoForm: FC = () => {
  const { addTodo } = useTodos();
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (newTodo.length > 2) {
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <SFormContainer onSubmit={handleSubmit}>
      <TextField
        name="todo"
        onChange={handleChange}
        placeholder="What needs to be done?"
        value={newTodo}
      />
    </SFormContainer>
  );
};

const SFormContainer = styled.form`
  margin-top: 50px;
`;

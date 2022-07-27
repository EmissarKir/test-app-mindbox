import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import { baseTheme } from "./styles/theme";
import { AddTodoForm } from "./components/ui/addTodoForm/addTodoForm";
import { Filter } from "./components/ui/filter/filter";
import { TodoList } from "./components/ui/todoList";
import { useTodos } from "./hooks/useTodos";
import Title from "./components/common/title";

function App() {
  const { todos, sortTodos } = useTodos();

  return (
    <ThemeProvider theme={baseTheme}>
      <SContainer>
        <Title label="Todos Mindbox" />
        <AddTodoForm />
        {todos.length !== 0 && <Filter count={todos.length} />}
        <TodoList items={sortTodos} />
      </SContainer>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 600px;
  margin: 0 auto;
`;

import { useState } from "react";
import styled from "styled-components";
import Input from "./Input";

const AddTaskContainer = styled.div`
  background-color: white;
  padding: 20px;
  text-align: start;
  border-radius: 3px;
  box-shadow: 3px 3px 10px grey;

  & > * + * {
    margin-top: 12px;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 8px 0;
  border: none;
  background-color: #352f23;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;

  &:active {
    cursor: grabbing;
  }
`;

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function addTask() {
    // Validação do inputs
    if (!title.trim() || !description.trim()) {
      return alert("Preencha todos os campos");
    }
    onAddTaskSubmit(title, description);
    setTitle("");
    setDescription("");
  }

  return (
    <AddTaskContainer>
      <Input
        type="text"
        placeholder="Digite o titulo da tarefa"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <Button onClick={addTask}>Adicionar</Button>
    </AddTaskContainer>
  );
}

export default AddTask;

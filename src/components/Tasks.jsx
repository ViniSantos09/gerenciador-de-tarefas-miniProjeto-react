import styled from "styled-components";
import { CheckIcon, ChevronRightIcon, Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const TasksContainer = styled.ul`
  background-color: white;
  padding: 15px;
  text-align: start;
  border-radius: 3px;
  box-shadow: 1px 1px 10px grey;
`;

const ListItems = styled.li`
  list-style: none;
  margin-bottom: 10px;
  display: flex;
  gap: 8px;
`;

const ListItemBtn = styled.button`
  background-color: grey;
  color: white;
  padding: 10px;
  border-radius: 5px;
  font-size: 15px;
  width: 100%;
  border: none;
  cursor: pointer;
  text-align: start;
  display: flex;
  align-items: center;
  gap: 2px;

  text-decoration: ${(props) => (props.isCompleted ? "line-through" : "none")};

  &::after {
  }
`;

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <TasksContainer>
      {tasks.map((task) => (
        <ListItems key={task.id}>
          <ListItemBtn
            isCompleted={task.isCompleted}
            onClick={() => onTaskClick(task.id)}
          >
            {task.isCompleted && <CheckIcon />}
            {task.title}
          </ListItemBtn>

          <Button onClick={() => onSeeDetailsClick(task)}>
            <ChevronRightIcon />
          </Button>

          <Button onClick={() => onDeleteTaskClick(task.id)}>
            <Trash2Icon />
          </Button>
        </ListItems>
      ))}
    </TasksContainer>
  );
}

export default Tasks;

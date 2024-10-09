import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";

const PageContainer = styled.div`
  background-color: black;
  color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DaddyContainer = styled.div`
  position: relative;
  text-align: center;
`;

const H2 = styled.h2`
  margin-top: 0;
  font-size: 1.8rem;
`;

const MainContainer = styled.div`
  width: 500px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  background-color: white;
  color: black;
  margin-top: 13px;
  border-radius: 8px;
  padding: 30px 16px 25px 16px;
  box-shadow: 3px 3px 10px grey;
`;

const P = styled.p`
  word-break: break-all;
`;

const Button = styled.button`
  position: absolute;
  left: 0;
  top: 33px;
  background-color: black;
  color: white;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const descritption = searchParams.get("description");
  return (
    <PageContainer>
      <DaddyContainer>
        <h1>Detalhes da Tarefa</h1>

        <Button onClick={() => navigate(-1)}>
          <ChevronLeftIcon />
        </Button>

        <MainContainer>
          <H2>{title}</H2>
          <P>{descritption}</P>
        </MainContainer>
      </DaddyContainer>
    </PageContainer>
  );
}

export default TaskPage;

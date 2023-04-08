import GlobalStyle from "./styles/global";
import styled from "styled-components";
import Form from "./components/Form.js";
import Grid from "./components/Grid";
import FormBuscar from './components/FormBuscar';
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;

function App() {
  const [pessoas, setPessoas] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getPessoas = async () => {
    try {
      const res = await axios.get("http://localhost:3003/pessoa");
      setPessoas(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getPessoas();
  }, [setPessoas]);

  return (
    <>
      <Container>
        <Title>PESSOAS</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getPessoas={getPessoas} />
        <Grid setOnEdit={setOnEdit} pessoas={pessoas} setPessoas={setPessoas} />
      </Container>
      <Container>
        <FormBuscar onEdit={onEdit} setOnEdit={setOnEdit} getPessoas={getPessoas} />
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
    </>
  );
}

export default App;
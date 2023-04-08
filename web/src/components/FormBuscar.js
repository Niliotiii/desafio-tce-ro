import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label``;


const ResultsContainer = styled.div`
  margin-top: 20px;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const Result = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const ResultTitle = styled.h3`
  font-size: 18px;
  margin: 0;
`;

const ResultSubtitle = styled.p`
  font-size: 14px;
  margin: 0;
  color: #888;
`;

const FormBuscarNome = () => {

  const ref = useRef();
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    if (query) {
      axios
        .get(`http://localhost:3003/pessoa?nome_like=${query}`)
        .then(({ data }) => {
          setResult(data);
        })
        .catch(({ data }) => {
          console.error(data);
        });
    }
  }, [query]);

  return (
    <FormContainer ref={ref}>
      <InputArea>
        <Label>Buscar Nome</Label>
        <Input name="nome" onChange={(e) => setQuery(e.target.value)} />
      </InputArea>
      {result.length > 0 && (
        <ResultsContainer>
          {result.map(({ id, nome, cpf }) => (
            <Result key={id}>
              <div>
                <ResultTitle>{nome}</ResultTitle>
                <ResultSubtitle>{cpf}</ResultSubtitle>
              </div>
            </Result>
          ))}
        </ResultsContainer>
      )}
    </FormContainer>
  );
};

const FormBuscarCPF = () => {

  const ref = useRef();
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    if (query) {
      axios
        .get(`http://localhost:3003/pessoa?cpf=${query}`)
        .then(({ data }) => {
          setResult(data);
        })
        .catch(({ data }) => {
          toast.error(data);
        });
    }
  }, [query]);

  const SearchResults = () => {
    const filteredResults = result.filter(({ cpf }) => cpf === query);

    return (
      <ResultsContainer>
        {filteredResults.map(({ id, nome, cpf }) => (
<Result key={id}>
<div>
<ResultTitle>{nome}</ResultTitle>
<ResultSubtitle>{cpf}</ResultSubtitle>
</div>
</Result>
))}
</ResultsContainer>
);
};

return (
<FormContainer ref={ref}>
<InputArea>
<Label>Buscar CPF</Label>
<Input name="cpf" onChange={(e) => setQuery(e.target.value)} />
</InputArea>
{result.length > 0 && <SearchResults />}
</FormContainer>
);
};

const App = () => {
return (
<div>
<h1>Buscar Pessoa</h1>
<FormBuscarNome />
<FormBuscarCPF />
</div>
);
};

export default App;
import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

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

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const Form = ({ getPessoas, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const pessoa = ref.current;

      pessoa.nome.value = onEdit.nome;
      pessoa.email.value = onEdit.email;
      pessoa.telefone.value = onEdit.telefone;
      pessoa.cpf.value = onEdit.cpf;
      pessoa.pai.value = onEdit.pai;
      pessoa.mae.value = onEdit.mae;
      pessoa.logradouro.value = onEdit.endereco.logradouro;
      pessoa.numero.value = onEdit.endereco.numero;
      pessoa.bairro.value = onEdit.endereco.bairro;
      pessoa.cidade.value = onEdit.endereco.cidade;
      pessoa.estado.value = onEdit.endereco.estado;
      pessoa.data_nasc.value = onEdit.data_nasc;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const pessoa = ref.current;

    if (
      !pessoa.nome.value ||
      !pessoa.email.value ||
      !pessoa.telefone.value ||
      !pessoa.cpf.value ||
      !pessoa.pai.value ||
      !pessoa.mae.value ||
      !pessoa.logradouro.value ||
      !pessoa.numero.value ||
      !pessoa.bairro.value ||
      !pessoa.cidade.value ||
      !pessoa.estado.value ||
      !pessoa.data_nasc.value 
    ) {
      return toast.warn("Preencha todos os campos!");
    }
    if (onEdit) {
      await axios.patch(`http://localhost:3003/pessoa/${onEdit.id}`, {
        nome: pessoa.nome.value,
        email: pessoa.email.value,
        telefone: pessoa.telefone.value,
        cpf: pessoa.cpf.value,
        pai: pessoa.pai.value,
        mae: pessoa.mae.value,
        data_nasc: pessoa.data_nasc.value,
        endereco: {
          logradouro: pessoa.logradouro.value,
          numero: pessoa.numero.value,
          bairro: pessoa.bairro.value,
          cidade: pessoa.cidade.value,
          estado: pessoa.estado.value
        }
      }).then(({ data }) => {
        toast.success(data);
      }).catch(({ data }) => {
        toast.error(data);
      });
    } else {
      await axios.post("http://localhost:3003/pessoa", {
        nome: pessoa.nome.value,
        email: pessoa.email.value,
        telefone: pessoa.telefone.value,
        cpf: pessoa.cpf.value,
        pai: pessoa.pai.value,
        mae: pessoa.mae.value,
        data_nasc: pessoa.data_nasc.value,
        endereco: {
          logradouro: pessoa.logradouro.value,
          numero: pessoa.numero.value,
          bairro: pessoa.bairro.value,
          cidade: pessoa.cidade.value,
          estado: pessoa.estado.value
        }
      }).then(({ data }) => {
        toast.success(data);
      }).catch(({ data }) => {
        toast.error(data);
      });
    }
    
    pessoa.nome.value = "";
    pessoa.email.value = "";
    pessoa.telefone.value = "";
    pessoa.cpf.value = "";
    pessoa.pai.value = "";
    pessoa.mae.value = "";
    pessoa.logradouro.value = "";
    pessoa.numero.value = "";
    pessoa.bairro.value = "";
    pessoa.cidade.value = "";
    pessoa.estado.value = "";
    pessoa.data_nasc.value = "";

    setOnEdit(null);
    getPessoas();
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Nome*</Label>
        <Input name="nome" />
      </InputArea>

      <InputArea>
        <Label>CPF*</Label>
        <Input name="cpf" />
      </InputArea>

      <InputArea>
        <Label>Logradouro*</Label>
        <Input name="logradouro" />
      </InputArea>

      <InputArea>
        <Label>Número*</Label>
        <Input name="numero" />
      </InputArea>

      <InputArea>
        <Label>Bairro*</Label>
        <Input name="bairro" />
      </InputArea>

      <InputArea>
        <Label>Cidade*</Label>
        <Input name="cidade" />
      </InputArea>

      <InputArea>
        <Label>Estado*</Label>
        <Input name="estado" />
      </InputArea>

      <InputArea>
        <Label>E-mail*</Label>
        <Input name="email" type="email" />
      </InputArea>

      <InputArea>
        <Label>Telefone*</Label>
        <Input name="telefone" />
      </InputArea>
      
      <InputArea>
        <Label>Nome do Pai*</Label>
        <Input name="pai" />
      </InputArea>

      <InputArea>
        <Label>Nome da Mãe*</Label>
        <Input name="mae" />
      </InputArea>
      
      <InputArea>
        <Label>Data de Nascimento*</Label>
        <Input name="data_nasc" type="date" />
      </InputArea>

      <Button type="submit">SALVAR</Button>
      
    </FormContainer>
  );
};

export default Form;
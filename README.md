# Desafio TCE

## Configuração

1. Abra o seu MySQL com as seguintes configurações:
    - User: root
    - Password: root
    - Host: localhost
    - Port: 3306

2. Dentro do MySQL execute o seguinte script:

```shell
create database desafio;

use desafio;

create table endereco(
id int not null primary key auto_increment,
logradouro varchar(100),
numero int,
bairro varchar(100),
cidade date,
estado varchar(14)
);
  
create table pessoa(
id int not null primary key auto_increment,
cpf varchar(15),
telefone varchar(15),
email varchar(100),
nome varchar(100),
mae varchar(100),
pai varchar(100),
data_nasc datetime,
endereco_fk int,
foreign key(endereco_fk) references endereco(id)
);
```

3. Acesse o drive abaixo para obter os arquivos úteis e um vídeo de explanação do código:
    - https://drive.google.com/drive/folders/1FBgTJ25gbCkeh_F_DFJCVACpXXYk_N8f?usp=sharing

4. Acesse a documentação da API no link abaixo:
    - https://documenter.getpostman.com/view/26806386/2s93XsXRpW

## Instruções para executar

1. Clone este repositório.

2. No diretório `api`, execute os seguintes comandos:

```shell
npm install

npm start
```

3. Abra um outro terminal e acesse o diretório `web`; dentro do diretório `web`, execute os seguintes comandos:

```shell
npm install

npm start
```

4. Acesse a aplicação nos seguintes links:
- API: http://localhost:3003
- Front-end: http://localhost:3000

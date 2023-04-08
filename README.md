desafio-tce

Configuração

Abra o seu mysql com as seguintes configurações:
user= root
password= root
host= localhost
port= 3306

Desntro do mysql execute o seguinte script

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

Drive com vídeo de explanação de código e arquivos úteis: 
https://drive.google.com/drive/folders/1FBgTJ25gbCkeh_F_DFJCVACpXXYk_N8f?usp=sharing

API Documentation: 
https://documenter.getpostman.com/view/26806386/2s93XsXRpW

Clonar este repositório;

Abra o teminal e acesse o diretório api; 
dentro do diretório api execute o comando npm install; 
depois execute o comando npm start; 

Abra um outro terminal e acesse o diretório web; 
dentro do diretório web execute o comando npm install; 
depois execute o comando npm start; 


api -> http://localhost:3003
front -> http://localhost:3000
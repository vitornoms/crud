# CRUD REST API com Node, Express e MySql 👨‍💻

## Informações neste passo a passo ✅
* Clonar repositório
* Criar o banco de dados
* Definir variáveis de ambiente
* Testar

## Clonando repositório
Comando git
```
git clone NOME_REPOSITORIO
```
Acessar repositório
```
cd NOME_REPOSITORIO
```
Instalar pacotes da aplicação
```
npm i
```
Abrir com VSCode
```
code .
```

## Criando o banco de dados
Criar a base de dados
```
create database crud_tasks;
```
Selecionar a base
```
use crud_tasks;
```
Criar tabela tasks
```
create table tasks(
    id int not null auto_increment primary key, 
    description varchar(120) not null,    
    status enum('A','I') default('A'),
    created_at timestamp default current_timestamp
)
```
## Abrir o arquivo .env e digitar o conteúdo abaixo, conforme os comentários
```
# Definir a porta do servidor. Ex: 3000
PORT = 

# DB_HOST: Domínio do servidor. Ex: 'localhost'
# DB_USER: Usuário do banco de banco de dados. Ex: 'root'
# DB_PASSWORD: Senha do banco de banco de dados. Ex: 'root'
# DB_DATABASE: Nome da base de dados criada. Ex: 'crud_tasks'

DB_HOST = 
DB_USER = 
DB_PASSWORD =
DB_DATABASE =
```

## Rodar API
```
npm start
```
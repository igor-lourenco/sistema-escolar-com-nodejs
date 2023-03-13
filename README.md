# CRUD escolar com nodejs

CRUD usando Mysql e os relacionamentos entre as tabelas usando Nodejs

## Modelo conceitual
![Modelo Conceitual](https://github.com/igor-lourenco/sistema-escolar-com-nodejs/blob/main/modelo_bd/diagrama.png)

## Regras de negócio do projeto

- O cliente não gostaria que registros importantes do sistema, como as Pessoas, sejam apagados definitivamente do banco de dados.
- Para deixar a interface mais limpa, o cliente gostaria que na lista de Pessoas, por padrão, fossem exibidos somente os usuários ativos.
- Foram percebidas algumas falhas de validação dos formulários por parte do front-end, o que resultou em dados de email inválidos no banco. É desejável que essa validação não seja responsabilidade exclusiva do front.
- É importante poder consultar todas as matrículas confirmadas referentes a estudante X de forma rápida.
- O cliente gostaria de poder consultar as turmas abertas por intervalo de data, para não receber informações desnecessárias (como turmas antigas).
- O cliente quer poder consultar as matrículas por turma e saber quais delas estão lotadas, para organizar melhor as matrículas.
- O cliente gostaria que, uma vez que o cadastro de um estudante fosse desativado, todas as matrículas relativas a este estudante automaticamente passassem a constar como “canceladas”.

# Tecnologias utilizadas
- Node 16.14
- Npm 8.3.1
- Express 4.18.12
- MySql 3.1.2
- Sequelize 5.21.7
- Sequelize-cli 5.5.1
- Nodemon 2.0.20
- Body-parser 1.20.2


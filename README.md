# RentX

![GitHub repo size](https://img.shields.io/github/repo-size/neanderdev/rentx-nodejs?style=for-the-badge)
![GitHub languages](https://img.shields.io/github/languages/count/neanderdev/rentx-nodejs?style=for-the-badge)
![GitHub language top](https://img.shields.io/github/languages/top/neanderdev/rentx-nodejs?style=for-the-badge)
![GitHub stars](https://img.shields.io/github/stars/neanderdev/rentx-nodejs?style=for-the-badge)

<img src="Diagrama-banco-de-dados-RentX.png" alt="Diagrama DB - RentX">

> 🚀 Aplicação desenvolvida no Ignite curso da Rocketseat na trila de NodeJS, desenvolvida em Express, banco de dados em PostgreSQL rodando no docker, ORM foi usado o TypeORM, Sentry para monitoramento de desempenho da API, e rate-limiter-flexible para evitar ataque DDoS e documentação em Swagger, autentitação em JWT com refresh-token.

## 🚀 Tecnologias
[![NODEJS](https://img.shields.io/badge/Node-green?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/s)
[![TYPESCRIPT](https://img.shields.io/badge/Typescript-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/docs/)
[![EXPRESS](https://img.shields.io/badge/Express-black?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/pt-br/)
[![DOCKER](https://img.shields.io/badge/Docker-blue?style=for-the-badge&logo=docker&logoColor=white)](https://docs.docker.com/)
[![POSTGRESQL](https://img.shields.io/badge/PostgreSQL-blue?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/docs/)
[![SENTRY](https://img.shields.io/badge/Sentry-blue?style=for-the-badge&logo=sentry&logoColor=white)](https://docs.sentry.io/)
[![SWAGGER](https://img.shields.io/badge/Swagger-green?style=for-the-badge&logo=swagger&logoColor=white)](https://swagger.io/docs/)

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:
<!---Estes são apenas requisitos de exemplo. Adicionar, duplicar ou remover conforme necessário--->
* Você instalou a versão mais recente de `<GIT / NodeJS / Yarn / PostgreSQL / Docker>`.
* Você tem uma máquina `<Windows / Linux / Mac>`.

## 🚀 Rodando a API RentX na sua máquina

Para rodar a API RentX na sua máquina, siga estas etapas:

## Clone this repository
``` 
$ git clone https://github.com/neanderdev/rentx-nodejs.git
```

## Go into the repository
```
$ cd rentx-nodejs
```

## Install dependencies
```
$ yarn
```

Antes de iniciar a aplicação, cria um arquivo na raiz do projeto chamado .env.local e pega o exemplo das váriaveis de ambiente no arquivo .env.example e preencha com as suas informações e você também terá que criar um arquivo ormconfig.json com a configuração do seu banco de dados postgresql.

## Run the database
```
$ docker compose up -d
```

## Build da aplicação com o docker (não obrigatória)
```
$ docker build -t rentx .
```

## Run the app
```
$ yarn dev
```

## 📫 Contribuindo para RentX
<!---Se o seu README for longo ou se você tiver algum processo ou etapas específicas que deseja que os contribuidores sigam, considere a criação de um arquivo CONTRIBUTING.md separado--->
Para contribuir com RentX, siga estas etapas:

1. Bifurque este repositório.
2. Crie um branch: `git checkout -b <nome_branch>`.
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Envie para o branch original: `git push origin <nome_do_projeto> / <local>`
5. Crie a solicitação de pull.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## 🤝 Colaboradores

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars3.githubusercontent.com/u/62663706" width="100px;" alt="Foto do Neander de Souza no GitHub"/><br>
        <sub>
          <b>Neander de Souza</b>
        </sub>
      </a>
    </td>    
  </tr>
</table>

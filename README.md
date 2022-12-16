# 🔎 Indice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Ferramentas](#-ferramentas)
- [Developer](#-developer)

---

# 📜 Sobre o projeto

Projeto realizado no evento Ignite Lab da rockeatseat, sendo criado um microserviço de notificações, usando NestJS e algumas boas praticas, como DDD, Clean Architecture, realização de testes.

---

## 🛠 Ferramentas

- [NodeJS]()
- [NestJS]()
- [Prisma]()
- [Jest]()

---

## Configuração Backend


```bash

  ##Clone o repositorio
  git clone https://github.com/ItaloFL/notification-server.git && cd notification-server

  ##Baixar dependencias
  yarn ou npm install

  ##Rode esse comando no seu terminal
  docker run -d --name seunomeBanco -e POSTGRES_PASSWORD=suasenhaBanco -p 5432:5432 postgres

  ##crie um .env dentro de server, onde estão SENHADOBANCO e NOMEDOBANCO escreva oque foi colocado acima
  DATABASE_URL="postgresql://postgres:SENHADOBANCO@localhost:5432/NOMEDOBANCO?schema=public"

  ##Rodar as migrations
  yarn prisma migrate dev

  #Rodar o backend e o seed de Usuarios
  yarn start:dev
 

```

## Developer

Ítalo Ferreira Lopes

- 💻 - [Github](https://github.com/ItaloFL)
- 📒 - [Linkedin](https://www.linkedin.com/in/italo-ferreira-dev/)

Feito com 💜

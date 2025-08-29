# Escola API — Oficina II

API RESTful para cadastro de Alunos e Professores usando Node.js, Express e Prisma + PostgreSQL.

escola-api/
├── prisma/
│ └── schema.prisma # Definição do banco de dados (Prisma ORM)
├── src/
│ ├── controllers/
│ │ ├── alunoController.js # Lógica de CRUD para Alunos
│ │ └── professorController.js # Lógica de CRUD para Professores
│ ├── routes/
│ │ ├── alunoRoutes.js # Rotas relacionadas a Alunos
│ │ └── professorRoutes.js # Rotas relacionadas a Professores
│ └── server.js # Arquivo principal do servidor Express
├── .env.example # Exemplo de variáveis de ambiente
├── index.html # Página inicial simples para teste
├── package.json # Configuração do projeto Node.js
├── .gitignore # Arquivos e pastas a serem ignorados pelo Git
└── README.md # Documentação do projeto

## Requisitos
- Node.js v16+
- PostgreSQL

## Instalação
1. Clone o projeto ou copie os arquivos.
2. Copie `.env.example` para `.env` e configure sua `DATABASE_URL`.
3. Instale dependências: `npm install`
4. Inicialize Prisma: `npx prisma generate` e `npx prisma migrate dev --name init`
5. Execute: `npm run dev`

## Endpoints
- GET /alunos
- POST /alunos
- PUT /alunos/:id
- DELETE /alunos/:id
- GET /professores
- POST /professores
- PUT /professores/:id
- DELETE /professores/:id

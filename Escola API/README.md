# Escola API — Oficina II

API RESTful para cadastro de Alunos e Professores usando Node.js, Express e Prisma + PostgreSQL.

escola-api/
├── prisma/
│ └── schema.prisma
├── src/
│ ├── controllers/
│ │ ├── alunoController.js
│ │ └── professorController.js
│ ├── routes/
│ │ ├── alunoRoutes.js
│ │ └── professorRoutes.js
│ └── server.js
├── .env.example
├── index.html
├── package.json
├── .gitignore
└── README.md

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

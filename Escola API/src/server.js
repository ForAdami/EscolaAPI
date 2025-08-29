const express = require('express');
const alunoRoutes = require('./routes/alunoRoutes');
const professorRoutes = require('./routes/professorRoutes');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/alunos', alunoRoutes);
app.use('/professores', professorRoutes);

app.get('/', (req, res) => {
  res.send('API Escola - funcionando. Use /alunos e /professores');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
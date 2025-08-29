const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAll = async (req, res) => {
  try {
    const alunos = await prisma.aluno.findMany();
    res.status(200).json(alunos);
  } catch (error) {
    res.status(500).json({ error: 'Não foi possível listar os alunos.' });
  }
};

exports.create = async (req, res) => {
  try {
    const { nome, email, idade } = req.body;
    const idadeInt = parseInt(idade, 10);
    const novoAluno = await prisma.aluno.create({ data: { nome, email, idade: idadeInt } });
    res.status(201).json(novoAluno);
  } catch (error) {
    if (error.code === 'P2002') {
      return res.status(409).json({ error: 'Email já cadastrado.' });
    }
    res.status(500).json({ error: 'Não foi possível cadastrar o aluno.' });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, email } = req.body;
    const aluno = await prisma.aluno.update({
      where: { id: parseInt(id, 10) },
      data: { nome, email },
    });
    res.status(200).json(aluno);
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({ error: `Aluno com ID ${req.params.id} não encontrado.` });
    }
    res.status(500).json({ error: 'Não foi possível atualizar o aluno.' });
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.aluno.delete({ where: { id: parseInt(id, 10) } });
    res.status(204).send();
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({ error: `Aluno com ID ${req.params.id} não encontrado.` });
    }
    res.status(500).json({ error: 'Não foi possível excluir o aluno.' });
  }
};
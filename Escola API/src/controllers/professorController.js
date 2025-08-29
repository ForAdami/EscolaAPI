const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getAll = async (req, res) => {
  try {
    const professores = await prisma.professor.findMany();
    res.status(200).json(professores);
  } catch (error) {
    res.status(500).json({ error: 'Não foi possível listar os professores.' });
  }
};

exports.create = async (req, res) => {
  try {
    const { nome, email, idade } = req.body;
    const idadeInt = parseInt(idade, 10);
    const novoProfessor = await prisma.professor.create({ data: { nome, email, idade: idadeInt } });
    res.status(201).json(novoProfessor);
  } catch (error) {
    if (error.code === 'P2002') {
      return res.status(409).json({ error: 'Email já cadastrado.' });
    }
    res.status(500).json({ error: 'Não foi possível cadastrar o professor.' });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, email } = req.body;
    const professor = await prisma.professor.update({
      where: { id: parseInt(id, 10) },
      data: { nome, email },
    });
    res.status(200).json(professor);
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({ error: `Professor com ID ${req.params.id} não encontrado.` });
    }
    res.status(500).json({ error: 'Não foi possível atualizar o professor.' });
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.professor.delete({ where: { id: parseInt(id, 10) } });
    res.status(204).send();
  } catch (error) {
    if (error.code === 'P2025') {
      return res.status(404).json({ error: `Professor com ID ${req.params.id} não encontrado.` });
    }
    res.status(500).json({ error: 'Não foi possível excluir o professor.' });
  }
};
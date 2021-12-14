const mongoose = require('mongoose');
const vagaSchema = require('../models/vaga');

const getAll = async (req, res) => {
    const vagas = await vagaSchema.find();
    res.status(200).json(vagas);
}

const getOne = async (req, res) => {
    try{
        const vaga = await vagaSchema.findById(req.params.id);
        if(vaga == null){
            return res.status(404).json({message: 'Vaga não encontrada.'});
        }
        res.status(200).json(vaga);
    }catch (error){
        res.status(error.code).json({message: error.message})
    }
}

const create = async (req, res) => {
    const vaga = new vagaSchema({
        _id: new mongoose.Types.ObjectId(),
        nomeVaga: req.params.nomeVaga,
        salario: req.body.salario,
        link: req.body.link,
        empresa: req.body.empresa,
        descricao: req.body.descricao,
        criadoEm: req.body.criadoEm
    })

    const vagaJaExiste = await vagaSchema.findOne({nome: req.body.nome});
    if(vagaJaExiste){
        return res.status(404).json({error: 'Vaga já existe/cadastrada'});
    }

    try{
        const novaVaga = await vaga.save();
        res.status(201).json(novaVaga);
    }catch (error){
        res.status(500).json({message: error.message});
    }
}

const update = async (req, res) => {
    try {
      const vaga = await vagaSchema.findById(req.params.id)
      if(vaga == null) {
        return res.status(404).json({message: 'Vaga não pode ser encontrada'})
      }
      
      if (req.body.nomeVaga != null) {
        vaga.nomeVaga = req.body.nomeVaga
      }

      if (req.body.salario != null) {
        vaga.salario = req.body.salario
      }
  
      if (req.body.link != null) {
        vaga.link = req.body.link
      }
  
      if (req.body.empresa != null) {
        vaga.empresa = req.body.empresa
      }
  
      if (req.body.descricao != null) {
        vaga.descricao = req.body.descricao
      }
  
      if (req.body.criadoEm != null) {
        vaga.criadoEm = req.body.criadoEm
      }
      
      const vagaAtualizada = await vaga.save()
      res.json(vagaAtualizada)
  
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
}

const deleteOne = async (req, res) => {
    try{
        const vaga = await vagaSchema.findById(req.params.id);
        if(vaga == null){
            return res.status(404).json({ message: 'Vaga não pode ser encontrada'});
        }

        await vaga.remove();
        res.status(200).json({ message: 'Vaga geletada com sucesso!' });
    }catch (error) {
        res.status(500).json({ message: error.message });
    }
}
  

module.exports = {
    getAll,
    getOne,
    create,
    update,
    deleteOne
}
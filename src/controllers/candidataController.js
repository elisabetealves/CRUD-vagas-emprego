const mongoose = require('mongoose');
const candidata = require('../models/candidata');

const getAll = async (req, res) => {
    const aspirante = await candidata.find();
    res.status(200).json(aspirante);
};

const getById = async (req, res) => {
    try{
        const aspirante = await candidata.findById(req.params.id);
        if(aspirante == null){
            return res.status(400).json({message: 'Candidata não encontrada.'});
        }
        res.status(200).json(aspirante);
    }catch (error){
        res.status(500).json({ message: error.message})
    }
}

const create = async (req, res) =>{
    const aspirante = new candidata({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        areaInteresse:req.body.areaInteresse,
        github: req.body.github,
        linkedin: req.body.linkedin,
        criadoEm: req.body.criadoEm
    });

    const aspiranteJaExiste = await candidata.findOne({nome: req.body.nome});
    if(aspiranteJaExiste){
        return res.status(400).json({ error: 'Candidata já existe/cadastrada.'});
    };

    try{
        const novaAspirante = await aspirante.save();
        res.status(201).json(novaAspirante);
    } catch (error){
        res.status(400).json({ message: error.message});
    }
}

const updateAll = async (req, res) => {
    try{
        const { id } = req.params;
        const body = req.body;
        const update = { new: true };

        const aspirante = await candidata.findByIdAndUpdate(id, body, update);
        return res.status(200).json(aspirante); 
    }catch(error){
        return res.status(500).json({ message: error.message})
    }
}

const updateOne = async (req,res) => {
    try{
        const aspirante = await candidata.findById(req.params.id);
        if(aspirante == null){
            return res.status(400).json({message: 'Candidata não pode ser encontada'});
        }
        aspirante.nome = req.body.nome;
        aspirante.areaInteresse = req.body.areaInteresse;
        aspirante.github = req.body.github;
        aspirante.linkedin = req.body.linkedin;
        aspirante.criadoEm = req.body.criadoEm;

        const aspiranteAtualizada = await aspirante.save();
        res.status(200).json(aspiranteAtualizada);

    }catch (error){
        res.status(500).json({ message: error.message });
    }
}

const deleteOne = async (req, res) => {
    try{
        const aspirante = await candidata.findById(req.params.id);
        if(aspirante == null){
            return res.status(404).json({ message: 'Candidata não pode ser encontrada.'});
        }

        await aspirante.remove()
        res.status(200).json({ message: 'Candidata deletada com sucesso!'});
    }catch (erro){
        res.status(500).json({ message: error.message})
    }
}

module.exports = {
    getAll,
    getById,
    create,
    updateAll, 
    updateOne,
    deleteOne
}
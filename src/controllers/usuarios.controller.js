const usuariosctl = {};
const UsuarioModel = require('../models/Usuarios');
const bcrypt = require('bcryptjs');

usuariosctl.getUsuarios = async (req, res) => {
    try {
        const respuesta = await UsuarioModel.find();
        res.json(respuesta)
    } catch (error) {
        console.log(error)
        res.json({message:error})
    }
};

usuariosctl.getUsuario = async (req, res) => {
    try {
        const respuesta = await UsuarioModel.findById(req.params.id);
        res.json(respuesta);
    } catch (error) {
        res.json({ message: error });
    }
}

usuariosctl.createUsuario = async (req, res) => {
    try {
        const newUsuario = new UsuarioModel(req.body);

        const hash = await bcrypt.hash(req.body.password, 12);
        newUsuario.password = hash;

        const usuarioCreado = await newUsuario.save();
        res.json(usuarioCreado);
    } catch (error) {
        res.json({ message: error })
    }
}


usuariosctl.updeteUsuario = async (req, res) => {
    try {
        const usuario = req.body;
        const hash = await bcrypt.hash(req.body.password, 12);
        usuario.password = hash;

        const respuesta = await UsuarioModel.findByIdAndUpdate(req.params.id, usuario);
        res.json(respuesta);
    } catch (error) {
        res.json({ message: error })
    }
}

usuariosctl.deleteUsuario = async (req, res) => {
    try {
        await UsuarioModel.findByIdAndDelete(req.params.id);
        res.json({ message: "Usuario eliminado" })
    } catch (error) {
        res.json({ message: error })
    }
}

module.exports = usuariosctl;
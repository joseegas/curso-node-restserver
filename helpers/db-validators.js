const Role = require('../models/role');
const Usuario = require('../models/usuario');

const esRoleValido = async(rol='')=>{
    
    const existeRol = await Role.findOne({rol});
    if(!existeRol){
        throw new Error(`El rol ${rol} no está registrado en la BD`);
    }
}

const existeEmail = async(correo='')=>{

    const existe = await Usuario.findOne({correo});
    if(existe){
        throw new Error(`El correo ${correo} ya está registrado`);
    }
}

const existeUsuarioPorID = async(id)=>{

    const existeUsuario = await Usuario.findById(id);
    if(!existeUsuario){
        throw new Error(`El id no existe ${id}`);
    }
}

module.exports = {
    esRoleValido,
    existeEmail,
    existeUsuarioPorID
}
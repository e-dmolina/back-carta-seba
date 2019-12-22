const { Schema, model } = require('mongoose');

const UsuarioSchema = new Schema({
    id:{ type:String },
    nombre:{ type:String, required:true },
    email:{ type:String, unique:true, required:true },
    password:{ type:String, required:true },
    sign_up_date:{ type:Date, default:Date.now() },
    last_login_date:{ type:Date, default:Date.now() }
})


module.exports = model('Usuarios', UsuarioSchema);
const { Schema, model } = require('mongoose');

const ProductoSchema = new Schema({
    id:{ type:String },
    nombre:{ type:String, required:true, trim:true, unique:true },
    categoria:{ type:String,
                required:true, 
                enum:['Pizzas','Empanadas','Hamburguesas y Sandwichs','Lomos','Papas','Bebidas','Pollos a la Parrilla'] },
    precioCompleto:{ type:String, required:true },
    precioMitad:{ type:String },
    stock:{ type:Number }
});

module.exports = model('Productos', ProductoSchema);
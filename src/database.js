const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://localhost/cartafocaccia';

mongoose.connect(uri,{
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify: false,
    useCreateIndex:true
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB is connected');
})
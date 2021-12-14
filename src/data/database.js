const mongoose = require('mongoose');
require('dotenv').config();

const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGOBD_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Database connected (:');
    }catch(error){
        console.log('Erro: ', error.message);
    }
}

module.exports = { connect }
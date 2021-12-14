const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const db = require('./data/database');
db.connect();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(morgan('dev'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const index = require('./routes/index');
const vagas = require('./routes/vagasRoutes');
const candidatas = require('./routes/candidatasRoutes');

app.use('/index', index);
app.use('/vagas', vagas);
app.use('/candidatas', candidatas);

app.get('/terms', (req, res) => {
    return res.json({message: 'Termo de Serviço'});
})

app.use('/', express.static('README.md'))


module.exports = app;
require('dotenv').config();

const app = require('./src/app');
const PORT = process.env.PORT || 7070;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
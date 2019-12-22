require('dotenv').config();
const app = require('./app');
require('./database');

const main = async () =>{
    await app.listen(app.get('port'));
    console.log('server listen on port ', app.get('port'));
};

main();
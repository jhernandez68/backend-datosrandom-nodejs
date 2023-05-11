//Código para iniciar el sv
const app = require('./app');

const { connect } = require('./database');

//Iniciando el servidor
async function main() {

    //Inicia la conexión con la db
    await connect();

    //Iniciar express
    await app.listen(9000);
    console.log('Servidor en puerto 9000')
}

main();
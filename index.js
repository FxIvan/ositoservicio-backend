require('dotenv').config()
const app = require('./app')
/*require('./db')*/

async function Main (){
    await app.listen(app.get('puerto'))
    console.log('Conectado por el puerto: ', app.get('puerto'))
}

Main()
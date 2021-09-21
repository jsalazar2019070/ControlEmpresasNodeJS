const mongoose = require("mongoose");
const app = require("./app");
var Usuario = require("./src/controladores/usuario.controlador");

mongoose.Promise = global.Promise
mongoose.connect(/*'mongodb+srv://Admin:123añs@empresas.fqhkw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'*/ 'mongodb://localhost:27017/dbControlEmpresas', {useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    
    Usuario.Admin();

    console.log('Se encuentra conectado a la base de datos');

    app.listen(3000, function (){
        console.log("Servidor corriendo en el puerto 3000");
    })
}).catch(err => console.log(err));
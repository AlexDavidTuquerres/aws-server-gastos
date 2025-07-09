const express = require('express')
const app = express();
const port = 3000
const morgan=require('morgan');
const {mongoose} = require('./database')



app.use(express.text()); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//middleware
app.use(morgan('tiny'));
app.use(require('./src/routes/server.routes'));


function logger(req,res,next){ 
    console.log('Ruta Recibida '+ req.protocol+'://'+req.get('host')+ req.originalUrl); 
    next(); 
} 

app.listen(port, () => {
    console.log('el servidor esta corriendo en el puerto' + port)
})

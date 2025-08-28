const express= require('express');
const app = express();

app.set('view engine','ejs');

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/',require('./route'));

// app.get('/', (req,res)=>{
//     res.send('hola en e el navegador');
// } )

app.listen(5000, () => {
    console.log('server corriendo en el puerto 5000');
})
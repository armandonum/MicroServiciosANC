const express= require('express');
const router = express.Router();

const conexion = require('./database/db')

router.get('/', (rep,res)=>{

    
    conexion.query('SELECT * FROM usuarios ', (error,results) => {
        if(error){
            throw error;
        } else
        {
            res.render('index.ejs',{result:results});
        }
    })
});

router.get('/create',(req,res) => {
    res.render('create')
})

router.get('/delete/:id',(req,res) =>{
    const id = req.params.id;
    conexion.query('DELETE FROM usuarios WHERE ID=?', [id], (error,resuls) => {
        if(error) {
            throw error;
        }else{
            res.redirect('/')
        }
    })
}
);

const crud = require('./controllers/crud')
router.post('/save',crud.save)


module.exports= router
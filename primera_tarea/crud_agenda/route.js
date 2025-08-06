const express= require('express');
const router = express.Router();

const conexion = require('./database/db')

router.get('/', (rep,res)=>{

    
    conexion.query('SELECT * FROM agenda ', (error,results) => {
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
router.get('/edit/:id', (req,res) =>{
    const id = req.params.id;
    console.log(   'EL ID Seleccionado es : ',id)
      conexion.query('SELECT * FROM agenda WHERE agenda.agendaID =?',[id], (error,results) => {
        if(error){
            throw error;
        } else
        {
            //console.log('se hizo la consulta de manera exitosa');
           res.render('edit',{agenda:results[0]});
        }
    })
  
});
router.get('/delete/:id',(req,res) =>{
    const id = req.params.id;
    conexion.query('DELETE FROM agenda WHERE agendaID=?', [id], (error,resuls) => {
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
router.post('/update',crud.update)


module.exports= router
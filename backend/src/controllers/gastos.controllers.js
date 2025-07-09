const Gasto=require('../models/gastos');
const gastosControllers={};


//metodo GET 
gastosControllers.getGastos= async(req, res)=> 
{ 
    const gastos= await Gasto.find(); 
    res.json(gastos);    
} 


//metodo POST 
gastosControllers.addGasto= async(req,res)=>{ 
    const gasto=new Gasto({ 
        id: req.body.id,   
        tipo: req.body.tipo,             
        monto:req.body.monto, 
        descripcion:req.body.descripcion 
        }); 
    console.log(gasto); 
    await gasto.save(); 
    res.json('status: Gasto guardado'); 
} 

module.exports=gastosControllers;
const usuariosControllers={};


usuariosControllers.addUsuario=async(requestAnimationFrame,res)=>{
    console.log(req.body);
    res.send("Nuevo usuario registrado");
}

usuariosControllers.getUsuarios= async(req,res)=>

{

    res.json(

       [{
        usuario:300,
        edad: 32,
        informacion:'Jugador de BallenitaFc'
       },


       ] 
    )


}

module.exports=usuariosControllers;

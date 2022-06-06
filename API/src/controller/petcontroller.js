import { addPet, verPets, deletarPets } from "../repository/petrepository.js";
import { Router } from "express";

const server = Router();



server.post('/pets/adicionar', async (req, resp) => {
    try{
        const novoPet  = req.body
        const petAcionado = await addPet(novoPet);
        resp.send(petAcionado);
    }   catch (err){
        resp.status(400).send({
            erro: err.mensage
        })
    }
});



server.get('/pets/listarpets', async (req, resp) => {
    try{
        const a = await verPets();
        resp.send(a);
    }   catch(err){
        erro: err.mensage;
    }
})



server.get('/pets/deletar/:id', async (req, resp) => {
    try{
        const a = Number(req.params.a);
        const b = await deletarPets(a);
        resp.send(b);
    }   catch(err){
        erro: err.mensage;
    }
})

export default server;
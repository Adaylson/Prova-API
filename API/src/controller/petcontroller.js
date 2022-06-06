import { addPet } from "../repository/petrepository";
import { Router } from "express";
const server = Router;

server.post('./pets/adicionar', async (req, resp) => {
    try{
        const novoPet  = req.body
        const petAcionado = await addPet(novoPet);
        resp.send(petAcionado);
    }   catch (err){
        resp.status(400).send({
            erro: err.mensage
        })
    }
    }
})
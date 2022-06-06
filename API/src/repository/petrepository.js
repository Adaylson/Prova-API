import { con } from "./connection.js";









export async function addPet(pet){
    const comando = 
            `insert into tb_pet(nm_pet)
                values(?)`;
    
    const resposta = await con.query(comando,[pet.nome])
    pet.id = resposta.insertid;
    return pet;
}



export async function verPets(){
    const comando =`
    select 
    id_pet as id,
    nm_pet as nome
    from 	tb_pet;`;

    const resposta = await con.query(comando);
    return resposta;
}

export async function deletarPets(id){
    const comando = `
    DELETE FROM tb_pet 
      WHERE id_pet = ?;`;

    const resposta = await con.query(comando,[id]);
    return resposta;
}
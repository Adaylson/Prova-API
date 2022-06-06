import { con } from "./connection";
export async function addPet(a){
    const comando = 
            `insert into tb_pet(nm_pet,)
                values(?,)`
    
    const resposta = await con.query(comando,[pet.nome])
    pet.id = resposta.insertid;
    return pet;
}
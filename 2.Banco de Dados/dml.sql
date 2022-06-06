
insert into tb_pet (nm_pet)
	 values ('');

DELETE FROM tb_pet 
      WHERE id_pet = ?;     


select 
		id_pet as id,
		nm_pet as nome
  from 	tb_pet;

-- Consultar pet (id)
select
		nm_pet as nome
  from	tb_pet
 where	id_pet = 1;


-- Alterar pet
update	tb_pet
   set	nm_pet = ''
 where id_pet = 1;
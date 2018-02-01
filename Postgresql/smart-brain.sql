create table local.users(
    id serial primary key,
    name varchar(100),
    email text unique not null,
    entries bigint default 0,
    joined timestamp not null
); commit;

-- npm ionstall knex 
-- npm install pg


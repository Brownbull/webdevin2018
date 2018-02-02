-- create
create table local.users(
    id serial primary key,
    name varchar(100),
    email text unique not null,
    entries bigint default 0,
    joined timestamp not null
); commit;

-- npm ionstall knex 
-- npm install pg

create table local.login (
	id serial not null primary key,
    hash varchar(100) not null,
    email text unique not null
);commit;


-- selects
select * from local.login;
select * from local.users;

------------------DROPS
drop table local.login;commit;
drop table local.users;commit;

--=====================================
-- HEROKU
--=====================================
-- create
create table users
(
    id serial primary key,
    name varchar(100),
    email text unique not null,
    entries bigint default 0,
    joined timestamp not null
);
commit;

-- npm ionstall knex 
-- npm install pg

create table login
(
    id serial not null primary key,
    hash varchar(100) not null,
    email text unique not null
);commit;


-- selects
\d
select *
from login;
select *
from users;

------------------DROPS
drop table login;commit;
drop table users;commit;
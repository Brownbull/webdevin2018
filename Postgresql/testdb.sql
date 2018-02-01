CREATE TABLE public.users
(
    name text,
    age smallint,
    birthday date
)
WITH (
    OIDS = FALSE
);

ALTER TABLE public.users
    OWNER to postgres;

insert into public.users (
        name, 
        age, 
        birthday) 
     values (
     'Gabriel',
     28,
     '1989-05-05');
commit;


insert into public.users (
        name, 
        age, 
        birthday) 
     values (
     'Claudia',
     39,
     '1978-08-18');
commit;

select * from public.users;

alter table public.users add score smallint;commit;

update public.users set score = 0 where name = 'Gabriel';commit;
update public.users set score = 0;commit;

select * from public.users where name like '%e%';
select * from public.users order by score asc;

create table public.login (
	ID serial not null primary key,
    secret varchar(100) not null,
    name text unique not null
);commit;

select * from public.login;

insert into public.login 
	(secret, name) 
    values
    ('asd', 'Gabriel');
   commit;
insert into public.login 
	(secret, name) 
    values
    ('asd', 'Claudia');
   commit;

-- JOINS
select a.* from users a join login b on a.name = b.name; 
drop table public.users;commit;

create or replace procedure roles
as
begin
    insert into ROLE values (ROLE_SEQUENCE.nextval, 'ROLE_ADMIN');
    insert into ROLE values (ROLE_SEQUENCE.nextval, 'ROLE_USER');
    commit;
end;
/
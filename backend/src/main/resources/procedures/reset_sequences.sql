create or replace procedure reset_sequences
as
    l_val number;
begin
    for i in (select sequence_name from user_sequences)
        LOOP
            execute immediate 'select ' || i.SEQUENCE_NAME || '.nextval from dual' INTO l_val;
            execute immediate 'alter sequence ' || i.SEQUENCE_NAME || ' increment by -' || l_val || ' minvalue 0';
            execute immediate 'select ' || i.SEQUENCE_NAME || '.nextval from dual' INTO l_val;
            execute immediate 'alter sequence ' || i.SEQUENCE_NAME || ' increment by 1 minvalue 0';
        end loop;
    commit;
end;
/
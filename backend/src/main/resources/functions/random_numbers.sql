create or replace function random_numbers(numbers_count in int, max_value in int)
    return number
as
    r_numbers number(19) := 0;
    r_number  int;
begin
    for i in 1 ..numbers_count
        loop
            r_number := power(2, TRUNC(DBMS_RANDOM.VALUE(0, max_value)));
            while BITAND(r_numbers, r_number) != 0
                loop
                    r_number := power(2, TRUNC(DBMS_RANDOM.VALUE(0, max_value)));
                end loop;
            r_numbers := r_numbers + r_number;
        end loop;
    return r_numbers;
end;
/
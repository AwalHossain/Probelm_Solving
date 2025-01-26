# Write your MySQL query statement below

update Salary set 
sex = case 
when sex="m" then "f"
else "m" end


-- Runtime = 435ms

update salary set sex=if(sex="m", "f","m");

--  Runtime = 744ms
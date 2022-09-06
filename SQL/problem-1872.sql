select employee_id,
case when mod(employee_id,2) <> 0 and name not like 'M%' then salary
else salary*0 End as bonus
from employees
order by employee_id;


SELECT employee_id, IF(employee_id%2=1 AND name NOT LIKE 'M%' , salary ,0)bonus
FROM Employees
ORDER BY 1
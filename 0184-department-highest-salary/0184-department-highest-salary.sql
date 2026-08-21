# Write your MySQL query statement below
SELECT Department,
Employee,
Salary
FROM (
    SELECT 
    d.name as Department,
    e.name AS Employee,
e.salary AS Salary,
DENSE_RANK() OVER(
    PARTITION BY d.name
    ORDER BY salary DESC
) AS SalaryRank
FROM Employee e
LEFT JOIN Department d
    ON e.departmentId = d.id
) AS Ranked
WHERE SalaryRank =1
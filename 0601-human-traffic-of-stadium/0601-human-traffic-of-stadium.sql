# Write your MySQL query statement below
SELECT 
id,
visit_date,
people
FROM (
    SELECT id,
    visit_date,
    people,
    LEAD(people,1) OVER (ORDER BY id) AS next1,
    LEAD(people,2) OVER (ORDER BY id) AS next2,
    LAG(people,1) OVER (ORDER BY id) AS previous1,
    LAG(people,2) OVER (ORDER BY id) AS previous2
    FROM Stadium
) AS next
WHERE people>=100 
AND (
    next1 >=100 AND next2 >=100
    OR
    previous1>=100 AND next1>=100
    OR
    previous2>=100 AND previous1>=100
)
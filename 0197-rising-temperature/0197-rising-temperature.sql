# Write your MySQL query statement below
SELECT id
FROM (
    SELECT id,
    temperature,
    recordDate,
    LAG(temperature,1) OVER (ORDER BY recordDate) AS prev_temp,
    LAG(recordDate,1) OVER (ORDER BY recordDate) AS prev_date
    FROM Weather
) AS temp
WHERE temperature > prev_temp
AND DATEDIFF(recordDate,prev_date) = 1
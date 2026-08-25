# Write your MySQL query statement below
SELECT s.user_id,
IFNULL(ROUND(COUNT(
    CASE
    WHEN c.action = 'confirmed' THEN 1
    END
)/COUNT(c.action),2),0)AS confirmation_rate
FROM Signups s
LEFT JOIN Confirmations c
    ON c.user_id = s.user_id
GROUP BY user_id
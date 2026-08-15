# Write your MySQL query statement below
SELECT Customer_number
FROM Orders
Group BY customer_number
Order by count(*) desc
LIMIT 1;

# Write your MySQL query statement below
SELECT 
product_id,
year AS first_year,
quantity,
price
FROM (
    SELECT product_id,
    year,
    quantity,
    price,
    Rank() OVER(
    PARTITION BY product_id
    ORDER BY year Asc
) AS firstYearCount
FROM Sales
) AS RankYear
WHERE firstYearCount = 1;


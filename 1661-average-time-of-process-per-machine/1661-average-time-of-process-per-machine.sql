# Write your MySQL query statement below
SELECT machine_id,ROUND(AVG(endingTime-timestamp),3) AS processing_time
FROM (
    SELECT machine_id,timestamp,LEAD(timestamp,1) OVER(PARTITION BY machine_id,process_id ORDER BY timestamp) AS endingTime FROM Activity
) as time
GROUP BY machine_id
ORDER BY machine_id

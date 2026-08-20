# Write your MySQL query statement below

SELECT DISTINCT
    request_at AS Day,
    ROUND(
        Cancellation_count / Status_count,
        2
    ) AS `Cancellation Rate`
FROM (
    SELECT 
        t.request_at,

        COUNT(*) OVER (
            PARTITION BY t.request_at
        ) AS Status_count,

        COUNT(
            CASE
                WHEN t.status IN (
                    'cancelled_by_driver',
                    'cancelled_by_client'
                ) THEN 1
            END
        ) OVER (
            PARTITION BY t.request_at
        ) AS Cancellation_count

    FROM Trips t

    LEFT JOIN Users client
        ON t.client_id = client.users_id

    LEFT JOIN Users driver
        ON t.driver_id = driver.users_id

    WHERE t.request_at BETWEEN '2013-10-01' AND '2013-10-03'
        AND client.banned = 'No'
        AND driver.banned = 'No'

) AS trip_counts;
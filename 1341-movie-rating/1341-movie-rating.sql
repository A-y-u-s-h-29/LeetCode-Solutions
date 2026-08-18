# Write your MySQL query statement below
(SELECT 
u.name as results
FROM MovieRating mR
LEFT JOIN Users u
ON mR.user_id = u.user_id
GROUP BY mr.user_id
ORDER BY count(mr.movie_id) DESC,u.name ASC
LIMIT 1
)
UNION ALL
(
    SELECT m.title as results
    FROM MovieRating mR
    LEFT JOIN Movies m
        ON mR.movie_id = m.movie_id
    WHERE mR.created_at BETWEEN '2020-02-01' AND '2020-02-29'
    GROUP BY mR.movie_id
    ORDER BY AVG(mR.rating) DESC,m.title ASC
    LIMIT 1
)    
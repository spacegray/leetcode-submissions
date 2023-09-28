# Write your MySQL query statement below


-- The goal is to select distinct seat_id values
SELECT distinct c1.seat_id

-- The main table is Cinema, and we're providing it an alias of c1 for ease of reference.
FROM Cinema c1

-- Here, we're performing a LEFT JOIN with the same Cinema table (self-join) using another alias, c2.
-- The JOIN condition is that the seat_id of c1 should be immediately before the seat_id of c2. 
-- So if c1 has seat_id of 2, c2 should have seat_id of 3.
LEFT JOIN Cinema c2 ON c1.seat_id+1 = c2.seat_id

-- Another LEFT JOIN is being performed with the same Cinema table using yet another alias, c3.
-- This JOIN condition ensures that the seat_id of c1 is immediately after the seat_id of c3.
-- So if c1 has seat_id of 3, c3 should have seat_id of 2.
LEFT JOIN Cinema c3 ON c1.seat_id-1 = c3.seat_id

-- The WHERE condition has two parts, ensuring that the selected seats are part of at least 
-- a pair of consecutive free seats:
WHERE 
    (c1.free = 1 AND c2.free = 1)  -- This condition checks if c1 and the next seat (c2) are both free
OR 
    (c1.free = 1 AND c3.free = 1)  -- This condition checks if c1 and the previous seat (c3) are both free

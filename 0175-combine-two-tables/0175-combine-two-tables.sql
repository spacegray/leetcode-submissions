# Write your MySQL query statement below

SELECT firstName, lastName, city, state
FROM Person
LEFT JOIN Address
ON Person.personId = Address.personId

/*
My reasoning:
1. I used a LEFT JOIN because I wanted to include all the rows from the Person table, 
    even if they didn't have a corresponding row in the Address table.
2. I used ON Person.personId = Address.personId to join the two tables on the personId column.
3. I used SELECT firstName, lastName, city, state to select the columns I wanted to return.
*/

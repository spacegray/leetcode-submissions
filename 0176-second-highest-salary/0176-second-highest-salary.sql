# Write your MySQL query statement below

SELECT MAX(salary) AS SecondHighestSalary
FROM Employee
WHERE salary < (SELECT MAX(salary) FROM Employee)

/* 
My reasoning for this solution:
I used a subquery to find the maximum salary in the table. 
Then I used a WHERE clause to find all salaries less than the maximum salary. 
I then utilized the MAX function to find the maximum of the remaining salaries. 
This returns the second highest salary in the table. If there is no second highest salary, 
the query will return null.
*/

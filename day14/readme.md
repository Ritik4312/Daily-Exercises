  -- subquery
  -- the inner query in amy query is called the subquery
  -- Sql Statement Where(inner query)
  
  
  SELECT 
    empName, salary
FROM
    employee
WHERE
    salary > (SELECT 
            AVG(salary)
        FROM
            employee);
  
-- Inner query 
select AVG(salary) from employee;


select empName from employee where deptId in (Select deptId from department where department in ('HR','IT'));

Select deptId from department where department in ('HR','IT');

-- Transaction
-- take care of ACID properties
-- A:- Atomicity ->All or Nothing
-- C:- Consistency -> data remains valid
-- I:- Isolation -> Transactions don't interfere with each other
-- D:- Durability -> saved changes remain after commit
-- Transaction Commands
-- Start Transaction:
--     - start Transaction
-- commit Transaction:
--     - commit
-- Rollback Transaction
--     - RollBack
-- Savepoints
--     -savepoint point
--     

START TRANSACTION;

update employee set salary = salary -1000 where empId = 2;
savepoint step1;
update employee set salary = salary + 1000 where empId = 5;
Rollback to step1;
Commit; 
select * from employee

# Query Optimization
- make query run fasterand use less CPU,memory and disk I/O
- Reduce texecution time
- reduce the resorces used
- Handle large dataset

Common Problems whgich you should avoid
1. Missing Indexes:-
   ### bad query:-
     select * from employee where department  = "IT"
    ### Solution
     create index idx_dept on employee(department);

    benefit
    - faster searching 
    - Aviod full scan
2. using Select *
    ### Bad Query
    Select * from employee
    ### Solution
    select empName from employee

    benefit
    - less Menory usage
    - faster execution
3. functions on Indexed Columns
   ### bad Query
   select * from employee where year(join_date) = 2025
   ### Solution 
   select * from employee where join_date between '2025-01-01' and '2025-12-31'

     benefit
       - index work properly
4. use of wildcards
 ### bad Query
    select * from employee where name like %john
### Solution 
    Select *n from employee where name like John%
5. Too many Joins
   benefit
   - large temporary table
   - High CPU

6. Subqueries Causing repeated Execution

Tools to understand Query Optimization
- Explain




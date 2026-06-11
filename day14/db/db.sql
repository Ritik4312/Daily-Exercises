-- Create database
create database Expense;
-- sHOW THE DATABASE
show databases;
-- uSE THE DATABASE YOU HAVE CREATED
use Expense
-- Create Table
create table users (
user_id int primary Key auto_increment,
first_name varchar(25) not null,
last_name varchar(25),
email varchar(100) not null,
password varchar( 25 ) not null);
-- Insert Record
insert into users values(1,"john","mac","john@gmail.com","john");
insert into users values(2,"Emma","j","emma@gmail.com","Johson");
insert into users values(3,"Charlotte","Brown","cbgmail.com","brown");
insert into users values(4,"Sophia","wilson","soph@gmail.com","wilson");
insert into users values(5,"Amelia","Tylor","jAmelia@gmail.com","Tylor");
-- see the table structure
desc Users;

Update users set password = "jack" where user_id =1; 

Delete from users where user_id = 1;
select * from users;

select first_name,last_name from users where user_id = 1;
-- where
select first_name as name, last_name as lname from users where user_id between 2 and 5;
-- distinct
insert into users values(6,"Sop","wilson","soph@gmail.com","wilson");
insert into users values(7,"Ame","Tylor","jAmelia@gmail.com","Tylor");
select distinct last_name as lname from users;

-- OrderBy
select * from users order by first_name ;
-- OrderBy ASC|Desc
select * from users order by first_name DESC;

-- AND
select * from users where user_id = 2 And first_name = "Emma";
-- OR
select * from users where user_id = 5 OR first_name = "Emma";
-- Not
select * from users where NOT user_id = 5; 

-- insert into Multiple Rows
insert into Users (user_id,first_name,last_name,email,password) values 
(9,"zeng","zang","zeng@gmail.com","zang"),
(10,"zeng","zang","zeng@gmail.com","zang"),
(11,"zeng","zang","zeng@gmail.com","zang");
 
-- Limit
select * from users LIMIT 5;
select * from users LIMIT 5 offset 2;
select * from users where first_name = "zeng"  LIMIT 2 offset 1;

-- Aggreation functions
  -- Count 
  -- Max
  -- MIN
  -- Sum
  -- Avg
  
select count(*) from users;
select sum(user_id) from users;

-- Like 
select * from users where first_name like 'a%';
select * from users where first_name like '%a';
select * from users where first_name like 'a___%';
select * from users where first_name like 'a__%';

-- Normalization
   -- database design
   -- help to reduce the redubdabcy
   -- improve data integrity
   -- Make insert and Update eazy
-- To achive it we use Normal forms
    -- 1nf
        -- No Repeted Information
        -- Each field contains atomic (Single) values
   --   EX:(Not 1nf form)
--       Student                   Subjects
--         John					Maths,Sci
-- 	1nf Table
--     Student                      Subject
--       John							Maths
--       John							sci	
    -- 2nf
      -- Most be in 1NF
      -- No Partial dependency(Non key attributes depend on full primary key)
 --      Ex:-
--       studentID StudentName  Course                  Instructor
--       101          John      Maths,Science           David, Mike
--       102          Emma      English,Physic			 Sarah,Tom
--       
--       -- 1nf
--       studentId		StudentName		Course		Instructor
--       101             John           Maths		 David	
--       101             John			 Science	 Mike
--       102			  emma			 English	 Sarah	
--       102             emma           physic		 TOM
--       
--       -- Split of the trable into 2   -- 2nd
--       Student ID       Student Name
--       101                 John
--       102                 emma
--       
--       StudentId       COURSR    Instructor     instructorPhons
--        101             Maths		David        11111
--        101             Science      Mike          222222
--        102		       Enlish	    Sarah         333333
--        102             physic       TOM           444444
--        
--        
--       
--     -- 3nf
--         - must nr in 2nf
--         - No Transitive dependenct
--         
--         Table 
--          Instructor                          Instructor phonr
--          David									11111
--          Mike									22222
--          
    -- BCNF
    
    
    -- Joins 
    create table employee( empId int primary Key auto_increment,
                           empName varchar(25) not null,
                           deptId int);
	insert into employee (empId,empName,deptId) values 
    (1,"Rahul",101),
    (2,"Priya",102),
    (3,"Amit",103),
    (4,"sneha",null);
    
    update employee set deptId = 101 where empId = 3;
    select * from employee;
    
    create table department( deptId int primary Key,
                            department varchar(25) not null);
	insert into department (deptId,department) values 
    (101,"HR"),
    (102,"Finance"),
    (104,"IT");

 -- Left Join
 -- Empolyee information with there departments
 
 select e.empId,e.empName,d.department from employee e LEFT JOIN Department d on e.deptId =d.deptId; 

 -- Right Join
  select e.empId,e.empName,d.department from employee e RIGHT JOIN Department d on e.deptId =d.deptId; 
  -- Inner Join
  -- Only the common data is visible
   select e.empId,e.empName,d.department from employee e Inner JOIN Department d on e.deptId =d.deptId; 
   -- Full Join or Outer Join
  -- Retur the records avalable in both the tables
  select e.empId,e.empName,d.department from employee e Cross JOIN Department d;
  -- selfJoin
  -- Joining the table from itself
  select * from employee;
  select e.empName Employee,m.empName Manager from Employee e Left Join Employee m on e.managerId =m.empId;
  
  
  
  
  
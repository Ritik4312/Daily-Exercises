# what is mongodb
- its nosql database
- supports document type data
- good for unstructured datas 
- fast access of the data
# Database :-
 - collection of multiple tables/collections
# Collection :- 
 - collection of same type of data 
# document
 - one record (row in SQL database)
    {
        "user": "John",
        "age": 30,
        "city": "New York"  
    }
    format is BSON :- Binary JSON
    faster for storage and retrieval

# Field
 - 1 column
Ex:- "user": "John",
  mongodb+srv://amisha_db_user:ami@123!@cluster0.fdshw8v.mongodb.net/
# _id
 - Primary Key 
 _id:"6534535"

To see all the databses :- show dbs
to see all the collections :- show collections
to see all the documents in a collection :- db.<collection_name>.find()
to see specific record (where clause):- db.<collection_name>.find({key:value})
     ex: db.Users.find({age:30})
to see grater then or less then :- db.<collection_name>.find({key:{$gt:value}})
     ex: db.Users.find({age:{$gt:30}})
    greater then :- $gt
    less then :- $lt
    greater then or equal to :- $gte
    less then or equal to :- $lte
    not equal to :- $ne
to see limited records :- db.<collection_name>.find().limit(10)
to see only some fiels :- db.<collection_name>.find({},{key:1})
     ex: db.Users.find({},{"name":3,"password":3,_id:0})
to get this information on nested data
     db.Users.find({"expense.expName":"food"})
to insert db.Users.insertOne({"name":"Ram","password":"Ram","age":35,"expense":[{"id":1,"expName":"food","amount":300}]})
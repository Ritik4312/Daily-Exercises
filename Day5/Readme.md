-  Maps 
- foreach
- set
- function hoisting
- Promises,
- Asyncronous Java script, 
- Syncronous Vs Asyncrononous Javascrit, 
- Call Backs, 
- Async & Await
- JSON and Restful APIs using "Async & Await"
- JavaScript - Fetch API
- DOM Manipulation
- Error Handling using JS
- Java Script Design Patterns (Introduction)


# http-server
- used to deploy the application on the server.
- to install "npm install -g http-server"
- to run enter in the folder=> npx http-server -p 8080

# JSON
- use to transwer the data from one page to other.
- its in the form of key and value
- data is always in the form of object
- Ex:-

# API:-
- set of rules which will allow user to communicate with different application.
- full form:- Application Programming interface.
- types of apis:-
    - REST API
      - Most Common
      - works with JSON Data and backend applications
      - use HTTP Mentods 
         - GET
         - POST
         - PUT
         - DELETE
         - PATCH
      - offical doc
        https://restfulapi.net/http-methods/

    - SOAP API
      - XML
      - common for banking
      - More secure and strict
    - GraphQL API
      - client request only
    - webSocket API
      - realtime communication
    - RPC API
      - calls function 

# Fetch API
- is used to send http request and get the data from server or API
Syn:-
 fetch("URL",{options})

# Async & Await
- stops the JS execution until the result is fetched
- async keyword is under on function and await is used befor the line which has long execution 

# DOM Manipulation
- Document Object Model


# Application 
## userstories
1. Login data for Movie app
 - Login
    {
        "users":[
            {
                "id":1,
                "name":"Ram",
                "password":"ram123"
                "watchlist":{1,2}
            },
            {
                "id":2,
                "name":"Raj",
                "password":"raj123"
                "watchlist":{3,4}
            }
        ]
    }
 2. view the movies data from APIs
 3. create the user watchlist

- install Json server :-  "npm install -g json-server"
- run Json server:- "npx json-server --watch db.json --port 3000"

## database for watchlist


user:[
  {
    id:1,
    watchlist:[
      {
        id:1,
        name:"xx"
      },
      {
        id:2,
        name:"yy"
      }}
    ]
  }
]
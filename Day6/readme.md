# Day6(TypeScript)
- Var-hoisting
- Functional Score
- Classes & Methods & Constructor
- Maps
- Iterators
- Interfaces
- Declartions and Annotations
- Anytype
- Enumeration
- Decorator
- Arrays & tuples

- Error Handling using JS
- Java Script Design Patterns (Introduction)

# Interduction
- typed JavaScript
- to install :- npm install -g typescript
- to check the version tsc -v

# Datatypes | Example | Description
- boolean | let b:boolean = true | True and false values
- string | let name:string = "John" | Text values
- number | let age:number = 25 | Numeric values
- Arrays | let nums:number[] = [1,2,3] | collection of data
- tuple | let user:[string,number] = ["John",25] | fixed type array
- Enum | enum status {Pending,Approved,Rejected} |named constants
- Any | let data: any = "Hello123" | Any type allowed
- Unknown | let value:unknown  | Safer alternative of any
- void | function get() :void | no return
- null | let a:null = null | null value
- undefined | let y = undefined| undefined value
- Object | let user:object= {name : string}|Object 
- Union Type | let num: string|number | multiple types allowed
- Literal Type
- Type Alias | type user = {name:string} | customreusable type
- Interface | interface Employee(id : number) : 
- Never | function error():never{} | function never return

# to compile 
- node <filename>.ts

# for Typespecific text
- to compile tsc <filename>.ts (converting the code in Js type)
- to run node <filename>.js

# Enum
- the default value of your 1 data is always "0" as value and increased by 1 till the end
- if you assigne any number then it will use that numnber as baseline and increse from that number
- based on the position we can access the key as well
enum OrderStatus{
    Pendind,
    Shipped = 2,
    Delivered
}
     let status = OrderStatus.Pendind

    console.log("Pending = ",OrderStatus.Pendind);
    console.log("Shipped = ",OrderStatus.Shipped);
    console.log("Delivered = ",OrderStatus.Delivered);
    console.log(OrderStatus[0]);
 console.log(OrderStatus["PendindVal"]);

# Aliases
- Type Aliases allow defining types with custom names
# Interface 
- Similar to Alias
- can be used to define the type in the application

# Error Handling
- pre alligned preventive step to makesure there will not be any issue in the code.
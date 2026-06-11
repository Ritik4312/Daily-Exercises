# what is Java:-
 - oop 
# class:-
    - if your class is not public you can keep any name just make sure you start it with caps
    - PSVM is the first method to be run by the compiler
    - In Java every statement should be inside a method
    - Sout is the print statement
# Data types:-
 - place holder
 - 8 types avalable :- 
      - boolean,
      - byte -> 1 byte,
      - char -> 2 bytes,
      - short -> 2 bytes,
      - int -> 4 bytes,
      - long -> 8 bytes,
      - float -> 4 bytes,
      - double -> 8 bytes

- the data needs to be of same type as you container
# Example code
 // //Input from the user
        // Scanner myInput = new Scanner(System.in);
        // System.out.println("Enter 1st number: ");
        // int num1 = myInput.nextInt();
        // System.out.println("Enter 2nd number: ");
        // int num2 = myInput.nextInt();
        // int sum = num1 + num2;
        // System.out.println("The sum of the two numbers is: " + sum);
# Type casting :-
 - Converting one data type to another
 - the final output is always of the size of the container
## types of Type casting:-
    - implicit(widening) and explicit(narrowing)
### Widening:-
    - smaller value on a bigger container
    - bydefault the data is converted 
    - Ex double num = 20    
### Narrowing:-
    - bigger value and smaller container
    - need to add datatype before the value
    - Ex int num = (int)20.5
# conditional statements
 - if/ else:- used to check the conditions and execute the flow accordingly
 - switch:- use to compare the independent values. we need break to break the flow.

# Loops:-
 - Execuatiion block which repeate itself
 - While loop:- checks the condition first then enters in the loop. if end is not avalable in the flow
 - for loop:- checks the condition and performs the task
 - do while loop:- it enters in the loop and them checks the condition while exit.

# Arrays:-
 -  collection of same dataypes
 - default index startes at 0
 - contignous storage
 // Array + loops+scanner
   int numbers[] = new int[10];
        Scanner myInput = new Scanner(System.in);
        for(int index = 0; index < numbers.length; index++)
        {
            System.out.println("Enter number at index"+ index+": ");
            numbers[index] = myInput.nextInt();
        }
        for(int index = 0; index < numbers.length; index++)
        {
            System.out.println("Number at index"+ index+": "+ numbers[index]);
        }
    }
# Strings:-
 - Array of Chars
 - Object of String class
 - Strings can not be modified(immutable)
 - String pool
 # String Buffer/String Builder
  - mutable
  - StringBuffer :- ThreadSafe, Slower
  - StringBuilder:- non Thread Safe, Faster
# Function
   -  Module of the program.
   - has 3 types
       - basic function
       - function with ars
       - function with return type
       - varargs :- variable arguments
    - the each function has specific way to be called.

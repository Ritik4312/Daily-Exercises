# Day 2 Session Agenda
 - Static and non static Members
 - Memory Allocation for Static and Non Static member
 - Abstraction & Interfaces
 - Encapsulation
 - Polymorphism
 - Inheritance, super keyword and super method
## Class:-
 - blue print of the object
 - contain data members and member functions
## Static 
    - Free from ther object of the class
    - class leval access
    - can be accessed by class name or without any name
## non static 
    - have to be with object    
    - have to have a object name with it
-----------------------------------------------------------------------
# static Ex
import java.util.Scanner;
class MyData{
    static int id;
    String name;
    int age;
    void getData(){
        Scanner sc = new Scanner(System.in);
        id++;
        System.out.println("Enter name:");
        name = sc.next();
        System.out.println("Enter age:");
        age = sc.nextInt();  
    }
    void display(){
        System.out.println("ID: " + id);
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }
    static void displayCount(){
        System.out.println("Total objects created: " + id);
    }
}
class Main{
    public static void main(String[] args) {
        MyData mdata1 = new MyData();
        mdata1.getData();
        mdata1.display();
        MyData mdata2 = new MyData();
        mdata2.getData();
        mdata2.display();   
    }
}
## Access Modifier 
    - public:- can be accessed from any class 
    - private:- just within that class
    - protected:- that class or child or class in the same package class
    - default:- that class and the same package only
    - to create a class :- Data Members should be private and member functions should be public
## Getters and Setters:- 
    - helps to access private variables outside the class
    - used to send the information to the database
    - we call then pojo class
# OOP
## Encapsulation
    - binding data and method in 1 unit.
    - It hides the data from outside classess

## Abstraction 
    - hinding the complex implementation details.
## Inheritance
    - accept the properties of other class
    - we need procted access to access any data from parent class
    - we need super keyword to create parent object;
## This keyword
    - "this" keyword represents the object of current class
## Super keyword
    - "Super" Represents the object of parent class
## constructors in the class
    - functions with no return type and name same as class name
    - use to allocate the memory to the objects
    - every class has a default constructor.
    - if you create it JVM will not create it for you else JVM(Java Virtual Machine) will create it.
    - when you creats the object of child class it will creates the object of parent by default.
## Interfaces:-
    - set of empty methods
    - can not create an object of interface 
    - has to be impleted in the child class befor making an object
## Abstract class:-
    - classes with atlest 1 abstract method
    - can not create object of an abstract class
    - we have to implement the abstract method befor creating the object
    - we can create the object by giving the method body in the same staterment 
    
## Polymorphism
    - one name many task.
    - types of Polymorphism:- Overloading and Overriding
### Overloading:- 
   - when Mentod names are same but param list id different
   - happens in same class.
   - either number of params are different or type or sequence
   - return type has no role in overloading
   - compile time polymorphism
### Overriding:-
    - when method and param list is same
    - can happen in parent and child class
    - runtime polymorphism


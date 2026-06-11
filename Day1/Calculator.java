// Menu based Calculator
// Create a Menu in main function :- ask user to enter the 2 numbes and your choice of operation 
// (1 for addition, 2 for subtraction, 3 for multiplication, 4 for division)
// create separate functions for each operation and call the function based on user choice

import java.util.Scanner;
class Calculator{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        int num1,num2, choice;
        
        System.out.println("Enter num 1: ");
        num1 = sc.nextInt();
        System.out.println("Enter num 2: ");
        num2 = sc.nextInt();
         do{
            System.out.println("Enter 1 for addition");
            System.out.println("Enter 2 for subtraction");
            System.out.println("Enter 3 for multiplication");
            System.out.println("Enter 4 for division");
            System.out.println("Enter 5 to exit");
            System.out.println("Enter choice: ");
            choice = sc.nextInt();
            switch (choice) {
                case 1:
                    add(num1, num2);
                    break;
                case 2:
                    subtract(num1, num2);
                    break;
                case 3:
                    multiply(num1, num2);
                    break;
                case 4:
                    divide(num1, num2);
                    break;
                case 5:
                    System.out.println("Exiting...");
                    return;
                default:
                    System.out.println("Invalid choice");
            }
           
        }while(choice != 5);
        
    }
    public static void add(int a, int b){
        System.out.println("Result: " + (a + b));
        return;
    }
    public static void subtract(int a, int b){
        System.out.println("Result: " + (a - b));
        return;
    }
    public static void multiply(int a, int b){
        System.out.println("Result: " + (a * b));
        return;
    }
    public static void divide(int a, int b){
        if (b != 0) {
            System.out.println("Result: " + (a / b));
        } else {
            System.out.println("Cannot divide by zero");
        }
        return;
    }
}
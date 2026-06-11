import java.util.Scanner;

public class FunctionDemo {
    public static void main(String[] args) {
        Scanner myInput = new Scanner(System.in);
        int numbers[] = {10, 20, 30, 40, 50};
        // ---------basic function calling-----------
        // System.out.println("This is main function");
        // FunctionDemo.myFunction();
        // System.out.println("This is main function again");
        // ---------parameterized function calling-----------
        // String name = myInput.nextLine();
        // FunctionDemo.myFunctionWithParameter(name);
        // ---------function with return type-----------
        // String name = myInput.nextLine();
        // String result = FunctionDemo.myFunctionWithReturnType(name);
        // System.out.println(result);
        // ---------Array as function parameter-----------
        // FunctionDemo.myFunctionWithArrayParameter(numbers);
        //---------Array as return type-----------
        // int [] result = FunctionDemo.myFunctionWithArrayReturnType(numbers);
        // for(int index = 0; index < result.length; index++)
        // {
        //     System.out.println("Number at index"+ index+": "+ result[index]);
        // }
        //------------------------varargs-----------------------

        int [] result = FunctionDemo.myFunctionWithVarargs("10", 20, 30, 40, 50,60,70,80,90,100);
        for(int index = 0; index < result.length; index++)
        {
            System.out.println("Number at index"+ index+": "+ result[index]);
        }
        myInput.close();
    }
    // basic function
    static void myFunction(){
        System.out.println("This is my function");
    }
    // parameterized function
    static void myFunctionWithParameter(String name){
        System.out.println("This is my function with parameter: "+ name);
    }
    // function with return type
    static String myFunctionWithReturnType(String name){
        return "Hello " + name +"!";
    }
    // Array as function parameter
    static void myFunctionWithArrayParameter(int[] numbers){
        for(int index = 0; index < numbers.length; index++)
        {
            System.out.println("Number at index"+ index+": "+ numbers[index]);
        }
    }
    // Array as return type
    static int[] myFunctionWithArrayReturnType(int [] numbers){
        System.out.println("------------------from the function------------------");
        for(int index = 0; index < numbers.length; index++)
        {
            numbers[index] = numbers[index] * 2;
        }
        return numbers;
    }
    // varargs
    static int[] myFunctionWithVarargs(String names,int ... numbers ){
        for(int index = 0; index < numbers.length; index++)
        {
            System.out.println("Number at index"+ index+": "+ numbers[index]);
        }
        System.out.println("----------------From Function------------------");
        return numbers; 
        // System.out.println("Number of arguments: "+ numbers.length);
    }
}


import java.util.Scanner;

class First {
    // Main Method

    public static void main(String[] ag) {
        // Arrays and loops
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
}
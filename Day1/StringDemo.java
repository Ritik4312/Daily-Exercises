import java.util.Scanner;

public class StringDemo {
    public static void main(String[] args) {
        // Object of String created
        // way 1 to create array of string
       // String [] names = {"John", "Jane", "Doe", "Smith"};
        // Ways 2
        // String [] names_1 = new String[5];
        // Scanner myInput = new Scanner(System.in);   
        // for(int index = 0; index < names_1.length; index++)
        // {
        //     names_1[index] = myInput.nextLine();
        // }
        // for(int index = 0; index < names_1.length; index++)
        // {
        //     System.out.println("Name at index"+ index+": "+ names_1[index]);
        // }

        StringBuilder sb = new StringBuilder();
        sb.append("Hello");
        System.out.println(sb.hashCode());
        sb.append(" World");
        System.out.println(sb.hashCode());

    }
}

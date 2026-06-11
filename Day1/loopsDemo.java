public class loopsDemo {
    public static void main(String[] args) {
        // if condition
        int number = 10;
        if(number > 0 && number < 100)
        {
            System.out.println("Number is less then 100 and greater than 0");
             switch (number) {
            case 10:
                System.out.println("Number is 10");
               // break;
            case 20:
                System.out.println("Number is 20");
                break;
            case 30:
                System.out.println("Number is 30");
                break;

            default:
                System.out.println("Number is not 10, 20 or 30");
                break;
        }
        }
        else if(number > 100 && number < 1000)
        {   int myNumber = 10;
            System.out.println("Number is less then 1000 and greater than 100");
            do
            {
                System.out.println("Number is: "+ number);
                number = number - 10;
            }while(myNumber <10 && number > 0);
        }
        else
        {
            System.out.println("Number is greater than 1000 or less than 0");
        }
       
        
    }
}

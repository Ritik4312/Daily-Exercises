import java.util.Scanner;
class Marks{
    String subject;
    int mark;
    Marks(String subject, int mark){
        this.subject = subject;
        this.mark = mark;
    }
}
class Student{
    int rollNo;
    String name;
    int age;
    Marks [] marks;
    Student(String name, int age, Marks [] marks){
        this.name = name;
        this.age = age;
        this.marks = marks;
    }
    void display(){
        System.out.println("Name: "+name);
        System.out.println("Age: "+age);
        System.out.print("Marks: ");
        double percentage = 0;
        for(Marks mark : marks){
            System.out.print( mark.subject+" "+mark.mark+" ");
            percentage += mark.mark;
        }
        percentage = percentage/5;   
        System.out.println("Percentage: "+percentage+"%");
    }
}
class Main{
    public static void main(String[] args) {
        Student[] students = new Student[2];
        Scanner sc = new Scanner(System.in);
        for(int i=1; i<=2; i++){
            System.out.println("Enter the name of the Student of Roll No "+i+": ");
            String name = sc.next();
            System.out.println("Enter the age");
            int age = sc.nextInt();
            System.out.println("Enter the marks of 5 subjects");
            Marks[] marks = new Marks[5];
            for(int j=0; j<5; j++){
                System.out.println("Enter the subject name: ");
                String subject = sc.next();
                System.out.println("Enter the mark: ");
                int mark = sc.nextInt();
                marks[j] = new Marks(subject, mark);
            }
            students[i-1] = new Student(name, age, marks);
        }
        sc.close();
        // for each
        for(Student student : students){
            student.display();
            
        }

    }

}
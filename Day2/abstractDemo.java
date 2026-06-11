// abstract class abstractDemo {
//     abstract void display();
//     void show(){
//         System.out.println("This is a concrete method in abstract class");
//     }
// }
// class childAbstract extends abstractDemo{
//     void display(){
//         System.out.println("This is the implementation of abstract method in child class");
//     }
// }
// class Main{
//     public static void main(String[] args) {
//         childAbstract c = new childAbstract();
//         abstractDemo v1 = new abstractDemo() {
//             void display() {
//                 System.out.println("This is an anonymous class implementation of abstract method");
//             }
//         };
//         v1.display();
//         v1.show();
//         c.display();
//         c.show();
//     }
// }

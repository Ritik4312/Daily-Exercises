// class Account {
//     protected int accBalance;
//     private String name;
//     private String accNo;
//     public void getAccDetails(String accNo,String name,int accBalance){
//         this.accNo=accNo;
//         this.name=name;
       
//         this.accBalance=accBalance;
//     }
//     public void displayAccDetails(){
//         System.out.println("Account Number: "+accNo);
//         System.out.println("Name: "+name);
//         System.out.println("Account Balance: "+accBalance);
//     }
// }
// class SavingsAccount extends Account {
//     private int interestRate = 12;
//     public void addInterest(){
//         super.getAccDetails("123456","Ram", 23456);
//         double interest = (accBalance * interestRate) / 100;
//         accBalance += interest;
//         System.out.println("New Account Balance after adding interest: " + accBalance);
//     }
// }

// class Main{
//     public static void main(String[] args) {
//         Account myAcc = new Account();
//         SavingsAccount mySavAcc = new SavingsAccount();
//         mySavAcc.addInterest();
//     }
// }
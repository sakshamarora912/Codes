import java.util.Scanner;  // scanner is class stored in java utils package;
class age{
    public static void main(String args[]){
    Scanner sc = new Scanner(System.in);   // create object of class scanner;
    int age;
    System.out.println("Enter your age:");
    age=sc.nextInt();   //store value in predefined function;
    if(age>=18)
    System.out.println("You are eligible to cast your vote");
    else
    System.out.println("You are not eligible to cast your vote");
}
}
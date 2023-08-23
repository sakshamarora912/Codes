import java.util.Scanner;
class table2{
    public static void main(String args[]){
    Scanner sc= new Scanner(System.in);
    System.out.print("Enter the start table number:-");
    int a=sc.nextInt();
    System.out.print("Enter the end table number:-");
    int b=sc.nextInt();
    for(int i=a;i<=b;i++){
        for(int j=1;j<=10;j++){
            System.out.print(i*j+" ");
        }System.out.println();
    }
}
}
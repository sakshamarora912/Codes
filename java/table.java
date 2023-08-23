import java.util.Scanner;
class table{
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        System.out.print("Enter the number:-");
        int n=sc.nextInt();
        System.out.print("Start from:-");
        int a=sc.nextInt();
        System.out.print("Till Where:-");
        int b=sc.nextInt();
        for(int i=a;i<=b;i++){
        System.out.print(n+"x"+i+"="+n*i+"\n");
        }
    } 
}

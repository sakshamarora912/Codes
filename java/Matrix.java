import java.util.Scanner;
class Matrix{
    public static void main(String args[]){
        Scanner sc= new Scanner(System.in);
        int[][] ar=new int[3][3];
        int sum=0;
        System.out.print("Enter 9 values for 3X3 Matrix:- ");
        for(int i=0;i<3;i++){
            for(int j=0; j<3;j++){
                ar[i][j]=sc.nextInt();
                }
            }
         for(int i=0;i<3;i++){
            sum =0;
            for(int j=0; j<3;j++){
                System.out.print(ar[i][j]+" ");
                sum=sum+ar[i][j];
                }
                System.out.print("\b ="+sum+"\n");
            }
        }
    }
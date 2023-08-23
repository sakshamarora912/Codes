import java.util.Scanner;
public class twomatrixsum {
    public static void main(String args[]){
        Scanner sc= new Scanner(System.in);
        int[][] ar=new int[3][3];
        System.out.print("Enter 9 values for 3X3 Matrix:- ");
        for(int i=0;i<3;i++){
            for(int j=0; j<3;j++){
                ar[i][j]=sc.nextInt();
                }
            }
            for(int m=0;m<3;m++){
                for(int n=0; n<3;n++){
                    ar[m][n]=sc.nextInt();
                    }
                }
            for(int a=0;a<3;a++){
                for(int b=0; b<3;b++){
                    ar[a][b]= ar[i][j]+ar[m][n];
                    }
                 }  
            for(int a=0;a<3;a++){
                for(int b=0; b<3;b++){
                    System.out.print(ar[a][b]+" ");
                    }
              }      

}
}
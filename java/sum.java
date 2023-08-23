import java.util.Scanner;
public class sum {
    public static void main(String[] args) {    
        int r, c, sumRow=0, sumCol=0;     
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter row: ");
        r = sc.nextInt();
        System.out.print("Enter coloum: ");
        c = sc.nextInt();
        int a[][] = new int[r][c]; 
        for(int i=0;i<3;i++){
            for(int j=0; j<3;j++){
                a[i][j]=sc.nextInt();
                }
            }   
               
        for(int i = 0; i < r; i++){    
            for(int j = 0; j < c; j++){    
              sumRow = sumRow + a[i][j];    
            }    
            System.out.println("Sum of " + (i+1) +" row: " + sumRow);    
        }    
    
        for(int i = 0; i < c; i++){    
            sumCol = 0;    
            for(int j = 0; j < r; j++){    
              sumCol = sumCol + a[j][i];    
            }    
            System.out.println("Sum of " + (i+1) +" column: " + sumCol);    
        }    
    }   
}

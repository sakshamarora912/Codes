import java.util.Scanner;
public class Main
{
 public static void main(String[] args) {    
        int r, c, sumRow=0, sumCol=0;     
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter row: ");
        r = sc.nextInt();
        System.out.print("Enter coloum: ");
        c = sc.nextInt();
        int a[][] = new int[r][c]; 
        
          for(int i=0;i<r;i++){
            for(int j=0; j<c;j++){
                a[i][j]=sc.nextInt();
                }
            }
    
        for(int i=0;i<r;i++){
            for(int j=0; j<c;j++){
                System.out.print(a[i][j]+" ");
            }
                System.out.print("\n");
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
        
        int i,j,sumdiag_1=0,sumdiag_2=0;
         for(i = 0; i < r; i++){    
            for(j = 0; j < r; j++){   
                if(i==j){
                    sumdiag_1 = sumdiag_1+ a[i][j]; 
                    }
                if((i+j+1)==r){
                     sumdiag_2=sumdiag_2+a[i][j];
                }
            }
        } 
        System.out.println("Sum of diagonal: " + sumdiag_1);  
        System.out.println("Sum of diagonal: " + sumdiag_2);  
    } 
}
import java.util.Scanner;
class array {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter row: ");
        int r = sc.nextInt();
        System.out.print("Enter coloum: ");
        int c = sc.nextInt();
        int arr[][] = new int[r][c];
        
        for (int i=0;i<r;i++){
        for (int j=0;j<c;j++) {
        System.out.print("Enter element: ");
        arr[i][j] = sc.nextInt();
        }
        }
    }     
}

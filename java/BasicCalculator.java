import javax.swing.*;
public class BasicCalculator {
    public static void main(String args[]){
 
    JFrame frame = new JFrame();  
    JLabel l1,l2,l3;

        l1 = new JLabel("ARTHEMATIC CALCULTOR"); 
        l1.setBounds(50, 80, 100, 30); 
        l1.setSize(300,40);  
        frame.add(l1);

        l2 = new JLabel("Enter First Number"); 
        l2.setBounds(50, 120, 100, 30); 
        l2.setSize(300,40);  
        frame.add(l2);

        l3 = new JLabel("Enter Second Number"); 
        l3.setBounds(50, 160, 100, 30); 
        l3.setSize(300,40);  
        frame.add(l3);

        JTextField tf1,tf2;

        tf1=new JTextField();  
        tf1.setBounds(250,120, 200,30);
        frame.add(tf1);

        tf2=new JTextField();  
        tf2.setBounds(250,160, 200,30);  
        frame.add(tf2);

        JButton button = new JButton("+");  
        button.setBounds(50,250,100,40);    
        button.setSize(60,40);
        frame.add(button);

        JButton button2 = new JButton("-");  
        button2.setBounds(130,250,100,40);  
        button2.setSize(60,40);
        frame.add(button2); 

        JButton button3 = new JButton("*");  
        button3.setBounds(210,250,100,40); 
         button3.setSize(60,40); 
        frame.add(button3);   

        JButton button4 = new JButton("/");   
        button4.setBounds(290,250,100,40);
        button4.setSize(60,40);  
        frame.add(button4); 

        frame.setSize(500,200); 
        frame.setLayout(null);
        frame.setVisible(true);  
    



}
}

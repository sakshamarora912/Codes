import javax.swing.*;  
public class Main{
	public static void main(String[] args) {
        JFrame frame = new JFrame("Button");   
        JButton button = new JButton("ADD");  
        button.setBounds(60,50,100,40);    
        button.setSize(70,80);
        frame.add(button);
        JButton button2 = new JButton("SUM");  
        button2.setBounds(180,50,100,40);  
         button2.setSize(70,80);
        frame.add(button2); 
        JButton button3 = new JButton("MUL");  
        button3.setBounds(60,160,100,40); 
         button3.setSize(70,80); 
        frame.add(button3);   
        JButton button4 = new JButton("DIV");   
        button4.setBounds(180,160,100,40);
         button4.setSize(70,80);  
        frame.add(button4); 
        // JButton button5 = new JButton("caculator");  
        // button5.setBounds(60,260,100,40);  
        // frame.add(button5);  
        button5.setSize(190,50);
        frame.setSize(500,200); 
        frame.setLayout(null);
        frame.setVisible(true);  
    }  
}  
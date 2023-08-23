import javax.swing.*;
import java.awt.event.*;
public class Radiobutton{
    public static void main(String args[]){
        JFrame frame=new JFrame();
        frame.setVisible(true); frame.setSize(300,300); frame.setLayout(null);
        JLabel label=new JLabel("Select The Cource");
        JRadioButton rb1=new JRadioButton("MCA"); JRadioButton rb2=new JRadioButton("BCA"); JRadioButton rb3=new JRadioButton("M.sc.IT");
        JTextField tf=new JTextField();
        ButtonGroup bg1=new ButtonGroup();
        bg1.add(rb1); bg1.add(rb2); bg1.add(rb3);
        label.setBounds(50,20,150,20);
        rb1.setBounds(50,40,150,20); rb2.setBounds(50,60,150,20); rb3.setBounds(50,80,150,20);
        tf.setBounds(50,100,150,20);

        rb1.addItemListener(new ItemListener(){
            public void itemStateChanged(ItemEvent ie){tf.setText("MCA");}
            }
        );
        rb2.addItemListener(new ItemListener(){
            public void itemStateChanged(ItemEvent ie){tf.setText("BCA");}
            }
        );
        rb3.addItemListener(new ItemListener(){
            public void itemStateChanged(ItemEvent ie){tf.setText("M.Sc.IT");}
            }
        );
        frame.add(label);
        frame.add(rb1); frame.add(rb2); frame.add(rb3);
        frame.add(tf);
    }
}
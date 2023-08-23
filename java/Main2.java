import javax.swing.*;
public class Main2 {
    public static void main(String args[]){
        JFrame fm=new JFrame();
        fm.setVisible(true);
        fm.setSize(300,300);
        fm.setLayout(null);

        JLabel l1=new JLabel("Select The Cource");
        JRadioButton c1=new JRadioButton("MCA");
        JRadioButton c2=new JRadioButton("BCA");
        JRadioButton c3=new JRadioButton("M.sc.IT");
        JTextField t1=new JTextField();
        ButtonGroup b1=new ButtonGroup();
        b1.add(c1);
        b1.add(c2);
        b1.add(c3);
        l1.setBounds(50,20,150,20);
        c1.setBounds(50,40,150,20);
        c2.setBounds(50,60,150,20);
        c3.setBounds(50,80,150,20);
        t1.setBounds(50,100,150,20);

        c1.addItemListener(new ItemListener(){
            public void itemStateChanged(ItemEvent ie){
                t1.setText("MCA");
                }
            });

        c2.addItemListener(new ItemListener(){
            public void itemStateChanged(ItemEvent ie){
                t1.setText("BCA");
                }
            });

        c3.addItemListener(new ItemListener(){
            public void itemStateChanged(ItemEvent ie){
                t1.setText("M.Sc.IT");
                }
            }
        );
        fm.add(l1);
        fm.add(c1);
        fm.add(c2);
        fm.add(c3);
        fm.add(t1);
        }
    }


DROP DATABASE IF EXISTS `sql_invoicing`;
CREATE DATABASE `sql_invoicing`; 
USE `sql_invoicing`;

CREATE TABLE `payment_methods` (
  `payment_method_id` int(4) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`payment_method_id`)
);
INSERT INTO `payment_methods` VALUES (1,'Credit Card');
INSERT INTO `payment_methods` VALUES (2,'Cash');
INSERT INTO `payment_methods` VALUES (3,'PayPal');
INSERT INTO `payment_methods` VALUES (4,'Debit Card');

CREATE TABLE `clients` (
  `client_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL,
  `state` char(2) NOT NULL,
  `phone` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`client_id`)
);
INSERT INTO `clients` VALUES (1,'Saksham','JagatPuri','Delhi','315-252-7305');
INSERT INTO `clients` VALUES (2,'Amit','NirmanVihar','Delhi','304-659-1170');
INSERT INTO `clients` VALUES (3,'Keshav','Mandawali','Delhi','415-144-6037');
INSERT INTO `clients` VALUES (4,'Himanshu','Indrapuram','Delhi','254-750-0784');
INSERT INTO `clients` VALUES (5,'Raghav','Krishna Nagar','Delhi','971-888-9129');

CREATE TABLE `invoices` (
  `invoice_id` int(11) NOT NULL,
  `number` varchar(50) NOT NULL,
  `client_id` int(11) NOT NULL,
  `invoice_total` decimal(9,2) NOT NULL,
  `payment_total` decimal(9,2) NOT NULL DEFAULT '0.00',
  `invoice_date` date NOT NULL,
  `due_date` date NOT NULL,
  `payment_date` date DEFAULT NULL,
  PRIMARY KEY (`invoice_id`),
  FOREIGN KEY (`client_id`) REFERENCES `clients` (`client_id`) 
) ;
INSERT INTO `invoices` VALUES (1,'91-953-3396',2,101.79,0.00,'2023-03-09','2023-03-29',NULL);
INSERT INTO `invoices` VALUES (2,'03-898-6735',5,175.32,8.18,'2023-06-11','2023-07-01','2023-02-12');
INSERT INTO `invoices` VALUES (3,'20-228-0335',5,147.99,0.00,'2023-07-31','2023-08-20',NULL);
INSERT INTO `invoices` VALUES (4,'56-934-0748',3,152.21,0.00,'2023-03-08','2023-03-28',NULL);
INSERT INTO `invoices` VALUES (5,'87-052-3121',5,169.36,0.00,'2023-07-18','2023-08-07',NULL);

CREATE TABLE `payments` (
  `payment_id` int(11) NOT NULL AUTO_INCREMENT,
  `client_id` int(11) NOT NULL,
  `invoice_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `amount` decimal(9,2) NOT NULL,
  `payment_method` tinyint(4) NOT NULL,
  PRIMARY KEY (`payment_id`),
  FOREIGN KEY (`client_id`) REFERENCES `clients` (`client_id`) ,
  FOREIGN KEY (`invoice_id`) REFERENCES `invoices` (`invoice_id`),
  FOREIGN KEY (`payment_method`) REFERENCES `payment_methods` (`payment_method_id`)
) ;
INSERT INTO `payments` VALUES (1,5,2,'2019-02-12',8.18,1);
INSERT INTO `payments` VALUES (2,1,6,'2019-01-03',74.55,1);
INSERT INTO `payments` VALUES (3,3,11,'2019-01-11',0.03,1);
INSERT INTO `payments` VALUES (4,5,13,'2019-01-26',87.44,1);
INSERT INTO `payments` VALUES (5,3,15,'2019-01-15',80.31,1);

DROP DATABASE IF EXISTS `sql_store`;
CREATE DATABASE `sql_store`;
USE `sql_store`;

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `quantity_in_stock` int(11) NOT NULL,
  `unit_price` decimal(4,2) NOT NULL,
  PRIMARY KEY (`product_id`)
);
INSERT INTO `products` VALUES (1,'Dinner Plate',70,1.21);
INSERT INTO `products` VALUES (2,'Rice',49,4.65);
INSERT INTO `products` VALUES (3,'Lettuce',38,3.35);
INSERT INTO `products` VALUES (4,'Brocolinni',90,4.53);
INSERT INTO `products` VALUES (5,'Ketchup',94,1.63);

CREATE TABLE `shippers` (
  `shipper_id` smallint(6) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`shipper_id`)
);
INSERT INTO `shippers` VALUES (1,'M & M');
INSERT INTO `shippers` VALUES (2,'TATA');
INSERT INTO `shippers` VALUES (3,'LOGISTICS');
INSERT INTO `shippers` VALUES (4,'RELIANCE');
INSERT INTO `shippers` VALUES (5,'ALPHA');

CREATE TABLE `customers` (
  `customer_id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `birth_date` date DEFAULT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `city` varchar(50) NOT NULL,
  PRIMARY KEY (`customer_id`)
);
INSERT INTO `customers` VALUES (1,'Saksham','Arora','1996-03-28','781-932-9754','Delhi');
INSERT INTO `customers` VALUES (2,'Keshav','Choudhary','1996-04-13','804-427-9456','Delhi');
INSERT INTO `customers` VALUES (3,'Raghav','Narang','1995-02-07','719-724-7869','Delhi');
INSERT INTO `customers` VALUES (4,'Amit','Dogra','1994-04-14','407-231-8017','Delhi');
INSERT INTO `customers` VALUES (5,'Vinay','Rastogi','1993-11-07',NULL,'Delhi');

CREATE TABLE `order_statuses` (
  `order_status_id` tinyint(4) NOT NULL,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`order_status_id`)
);
INSERT INTO `order_statuses` VALUES (1,'Processed');
INSERT INTO `order_statuses` VALUES (2,'Shipped');
INSERT INTO `order_statuses` VALUES (3,'Delivered');

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_id` int(11) NOT NULL,
  `order_date` date NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1',
  `comments` varchar(2000) DEFAULT NULL,
  `shipped_date` date DEFAULT NULL,
  `shipper_id` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`order_id`),
  FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`) ,
  FOREIGN KEY (`status`) REFERENCES `order_statuses` (`order_status_id`) ,
  FOREIGN KEY (`shipper_id`) REFERENCES `shippers` (`shipper_id`) 
);
INSERT INTO `orders` VALUES (1,6,'2019-01-30',1,NULL,NULL,NULL);
INSERT INTO `orders` VALUES (2,7,'2018-08-02',2,NULL,'2023-08-03',4);
INSERT INTO `orders` VALUES (3,8,'2017-12-01',1,NULL,NULL,NULL);
INSERT INTO `orders` VALUES (4,2,'2017-01-22',1,NULL,NULL,NULL);
INSERT INTO `orders` VALUES (5,5,'2017-08-25',2,'','2023-08-26',3);

CREATE TABLE `order_items` (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `unit_price` decimal(4,2) NOT NULL,
  PRIMARY KEY (`order_id`,`product_id`),
  FOREIGN KEY (`order_id`) REFERENCES `orders` (`order_id`),
  FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) 
);
INSERT INTO `order_items` VALUES (1,4,4,3.74);
INSERT INTO `order_items` VALUES (2,1,2,9.10);
INSERT INTO `order_items` VALUES (2,4,4,1.66);
INSERT INTO `order_items` VALUES (2,6,2,2.94);
INSERT INTO `order_items` VALUES (3,3,10,9.12);

CREATE TABLE `sql_store`.`order_item_notes` (
  `note_id` INT NOT NULL,
  `order_Id` INT NOT NULL,
  `product_id` INT NOT NULL,
  `note` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`note_id`));

INSERT INTO `order_item_notes` (`note_id`, `order_Id`, `product_id`, `note`) VALUES ('1', '1', '2', 'first note');
INSERT INTO `order_item_notes` (`note_id`, `order_Id`, `product_id`, `note`) VALUES ('2', '1', '2', 'second note');

DROP DATABASE IF EXISTS `sql_hr`;
CREATE DATABASE `sql_hr`;
USE `sql_hr`;

CREATE TABLE `offices` (
  `office_id` int(11) NOT NULL,
  `address` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL,
  PRIMARY KEY (`office_id`)
);
INSERT INTO `offices` VALUES (1,'Nirman Vihar','Delhi');
INSERT INTO `offices` VALUES (2,'Preet Vihar','Delhi');
INSERT INTO `offices` VALUES (3,'Pragati Madan','Delhi');
INSERT INTO `offices` VALUES (4,'Karkardooma','Delhi');
INSERT INTO `offices` VALUES (5,'Dev Nagar','Delhi');

CREATE TABLE `employees` (
  `employee_id` int(11) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `job_title` varchar(50) NOT NULL,
  `salary` int(11) NOT NULL,
  `reports_to` int(11) DEFAULT NULL,
  `office_id` int(11) NOT NULL,
  PRIMARY KEY (`employee_id`),
  FOREIGN KEY (`reports_to`) REFERENCES `employees` (`employee_id`),
  FOREIGN KEY (`office_id`) REFERENCES `offices` (`office_id`)
);
INSERT INTO `employees` VALUES (37270,'Yovonnda','Magrannell','Executive Secretary',63996,NULL,10);
INSERT INTO `employees` VALUES (33391,'D\'arcy','Nortunen','Account Executive',62871,37270,1);
INSERT INTO `employees` VALUES (37851,'Sayer','Matterson','Statistician III',98926,37270,1);
INSERT INTO `employees` VALUES (40448,'Mindy','Crissil','Staff Scientist',94860,37270,1);

DROP DATABASE IF EXISTS `sql_inventory`;
CREATE DATABASE `sql_inventory`;
USE `sql_inventory`;

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `quantity_in_stock` int(11) NOT NULL,
  `unit_price` decimal(4,2) NOT NULL,
  PRIMARY KEY (`product_id`)
);
INSERT INTO `products` VALUES (1,'Dinner Plate',70,1.21);
INSERT INTO `products` VALUES (2,'Rice',49,4.65);
INSERT INTO `products` VALUES (3,'Lettuce',38,3.35);
INSERT INTO `products` VALUES (4,'Brocolinni',90,4.53);
INSERT INTO `products` VALUES (5,'Ketchup',94,1.63);

drop database if exists cafetecdb;
create database cafetecdb;
use cafetecdb;

create table role (
id boolean not null,
name varchar (5) not null unique,
primary key (id)
);

create table user (
id int not null auto_increment,
control_number varchar(200) not null unique,
password  varchar (200) not null,
role_id boolean not null,
date date,
status bool not null,
primary key (id),
foreign key (role_id) references role(id)
);

/*Roles*/ 
insert role(id,name) values (True,"Admin");
insert role(id,name) values (False,"User");

/*Users*/
INSERT user (control_number, password, role_id, status, date) VALUES ("admin", 'admin', TRUE, TRUE, CURDATE());
INSERT user (control_number, password, role_id, status, date) VALUES ("14212008", '14212008', FALSE, TRUE, curdate());

SELECT * FROM role;
SELECT * FROM user;

create table product_type (
id boolean not null,
name varchar (7) not null unique,
primary key (id)
);

create table product (
id int not null auto_increment,
code_number varchar(10) not null unique,
name varchar(200) not null unique,
price float not null,
description  varchar (400) not null,
/*image longblob not null,*/
type_id boolean not null,
date date,
status bool not null,
primary key (id),
foreign key (type_id) references product_type(id)
);

/*Product Type*/ 
insert product_type (id,name) values (True,"Comedor");
insert product_type (id,name) values (False,"Tienda");

/*Product*/
INSERT product (code_number, name, price, description, type_id, status, date) VALUES ("1111111111", 'Hamburguesa', 53, "Una carne con queso en medio de dos panes", true, true, CURDATE());
INSERT product (code_number, name, price, description, type_id, status, date) VALUES ("1111111112", 'Hot-Dog', 35, "Una salchicha en medio de dos panes", true, True, CURDATE());
INSERT product (code_number, name, price, description, type_id, status, date) VALUES ("1111111113", 'Torta Jamón', 40, "Un jamón en medio de dos panes", true, true, CURDATE());
INSERT product (code_number, name, price, description, type_id, status, date) VALUES ("2222222221", 'Coca-Cola', 12, "Refrescante bebida", false, true, CURDATE());
INSERT product (code_number, name, price, description, type_id, status, date) VALUES ("2222222222", 'Takis', 11, "Sabritas marca barcel", false, true, CURDATE());
INSERT product (code_number, name, price, description, type_id, status, date) VALUES ("2222222223", 'Agua', 13, "Agua natural", false, true, CURDATE());

SELECT * FROM product_type;
SELECT * FROM product;
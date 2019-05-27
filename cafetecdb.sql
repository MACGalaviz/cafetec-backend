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
cash double not null,
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
INSERT user (control_number, password, cash, role_id, status, date) VALUES ("admin", 'admin',0.0, TRUE, TRUE, CURDATE());
INSERT user (control_number, password, cash, role_id, status, date) VALUES ("14212008", '14212008',70, FALSE, TRUE, curdate());
INSERT user (control_number, password, cash, role_id, status, date) VALUES ("14440264", '14440264',70, FALSE, TRUE, curdate());
INSERT user (control_number, password, cash, role_id, status, date) VALUES ("15440880", '15440880',70, FALSE, TRUE, curdate());

create table product_type (
id boolean not null,
name varchar (7) not null unique,
primary key (id)
);

create table product (
id int not null auto_increment,
code_number varchar(15) not null unique,
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

/*Product*//*
INSERT product (code_number, name, price, description, type_id, status, date) VALUES ("1111111111", 'Hamburguesa', 53, "Una carne con queso en medio de dos panes", true, true, CURDATE());
INSERT product (code_number, name, price, description, type_id, status, date) VALUES ("1111111112", 'Hot-Dog', 35, "Una salchicha en medio de dos panes", true, True, CURDATE());
INSERT product (code_number, name, price, description, type_id, status, date) VALUES ("1111111113", 'Torta Jamón', 40, "Un jamón en medio de dos panes", true, true, CURDATE());
INSERT product (code_number, name, price, description, type_id, status, date) VALUES ("2222222221", 'Coca-Cola', 12, "Refrescante bebida", false, true, CURDATE());
INSERT product (code_number, name, price, description, type_id, status, date) VALUES ("2222222222", 'Takis', 11, "Sabritas marca barcel", false, true, CURDATE());
INSERT product (code_number, name, price, description, type_id, status, date) VALUES ("2222222223", 'Agua', 13, "Agua natural", false, true, CURDATE());
*/

INSERT product (code_number, name, price, description, type_id, status, date) VALUES ("32312341234", 'Hamburguesa', 53, "hamburguesa con papas", true, true, CURDATE());
INSERT product (code_number, name, price, description, type_id, status, date) VALUES ("12312341233", 'baguette', 35, "baguette con jamon y queso", true, true, CURDATE());
INSERT product (code_number, name, price, description, type_id, status, date) VALUES ("12312349889", 'sandwich', 27, "bocadillo hecho con dos rebanadas de pan de molde rellenas de fiambre, queso o vegetales ", true, true, CURDATE());
INSERT product (code_number, name, price, description, type_id, status, date) VALUES ("12312341899", 'quesadillas', 30, "dos quesadillas dobles acompañadas de frijoles ", true, true, CURDATE());
INSERT product (code_number, name, price, description, type_id, status, date) VALUES ("12312341897", 'nachos', 60, "nachos grandes con carne", true, true, CURDATE());
INSERT product (code_number, name, price, description, type_id, status, date) VALUES ("12312341895", 'moyete', 35, "moyete con carne y acompañada de frijoles", true, true, CURDATE());
INSERT product (code_number, name, price, description, type_id, status, date) VALUES ("12312341867", 'torta', 35, "torta con papas sasonadas", true, true, CURDATE());
INSERT product (code_number, name, price, description, type_id, status, date) VALUES ("12312341765", 'papas', 20, "orden de papas sasonadas acompañada de sus aderesos", true, true, CURDATE());
INSERT product (code_number, name, price, description, type_id, status, date) VALUES ("12312341274", 'pizza', 35, "dos rebanadsas de pizza con dos ingredientes a elegir, acompañada de sus aderersos", true, true, CURDATE());
INSERT product (code_number, name, price, description, type_id, status, date) VALUES ("12312341564", 'sushi',45 , "sushi bombaso", true, true, CURDATE());
INSERT product (code_number, name, price, description, type_id, status, date) VALUES ("12312351276", 'ensalada',42 , "conjunto de vejetales y aderesos ", true, true, CURDATE());


INSERT product (code_number, name, price, description, type_id, status, date) VALUES ("2231234123", 'tostitos', 12, "sabritas", false, true, CURDATE());
INSERT product (code_number, name, price, description, type_id, status, date) VALUES ("3231234123", 'chetos', 8 , "sabritas", false, true, CURDATE());
INSERT product (code_number, name, price, description, type_id, status, date) VALUES ("2233234123", 'chokis', 12, "galletas rellenas de chocolate", false, true, CURDATE());
INSERT product (code_number, name, price, description, type_id, status, date) VALUES ("2231834173", 'emperador', 12, "galletas de limon", false, true, CURDATE());
INSERT product (code_number, name, price, description, type_id, status, date) VALUES ("2231934123", 'doritos', 10, "sabritas", false, true, CURDATE());
INSERT product (code_number, name, price, description, type_id, status, date) VALUES ("2231334123", 'jugo del valle', 10, "jugo de naranja", false, true, CURDATE());
INSERT product (code_number, name, price, description, type_id, status, date) VALUES ("2231634123", 'bubbaloo', 1, "chicles", false, true, CURDATE());
INSERT product (code_number, name, price, description, type_id, status, date) VALUES ("2231734123", 'tix tix', 3 , "paleta sabor acidito", false, true, CURDATE());
INSERT product (code_number, name, price, description, type_id, status, date) VALUES ("2231834123", 'principe', 16, "galletas sabor a chocolate", false, true, CURDATE());
INSERT product (code_number, name, price, description, type_id, status, date) VALUES ("2231238123", 'chips', 13, "sabritas fuego", false, true, CURDATE());

create table status_orden (
id int not null auto_increment,
status varchar(10) not null,
primary key(id)
);

INSERT status_orden (status) VALUES ("Espera");
INSERT status_orden (status) VALUES ("Aceptada");
INSERT status_orden (status) VALUES ("Cancelada");
INSERT status_orden (status) VALUES ("Finalizada");



create table orden (
id int not null auto_increment,
orden_code varchar(16) not null,
user_id int not null,
pedido longtext not null,
costo double not null,
status_orden_id int not null,
date date,
primary key (id),
foreign key (user_id) references user(id),
foreign key (status_orden_id) references status_orden(id)
);
create view ordenes as select orden.id, orden.orden_code, user.control_number, orden.pedido, orden.costo, status_orden.status, orden.date from orden, user, status_orden where orden.user_id = user.id and orden.status_orden_id = status_orden.id;



/*use cafetecdb;
SELECT * FROM product_type;
SELECT * FROM product;
SELECT * FROM user;
SELECT * FROM status_orden;
SELECT * FROM orden;
select * from ordenes;*/

SELECT * FROM orden;
select * from ordenes;

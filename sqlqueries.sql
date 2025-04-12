CREATE DATABASE ecommerce;
USE ecommerce;

CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price VARCHAR(20), -- Or DECIMAL(10,2) for numeric
    image VARCHAR(255),
    category VARCHAR(50)
);

INSERT INTO products (name, description, price, image, category)
VALUES 
('Vivo T4 Phone', 'Vivo T4 smartphone', '19999', 'images/vivo.webp', 'Mobile'),
('Dwell Laptop', 'Dwell IdeaPad Laptop', '68999', 'images/dl.webp', 'Laptop'),
('Bluetooth Headset', 'Wireless bluetooth headset', '2229', 'images/bt1.webp', 'Bluetooth'),
('Dwell PC', 'Desktop PC from Dwell', '36999', 'images/dp.webp', 'PC'),
('Oppo Phone', 'Oppo A-series smartphone', '18999', 'images/oppo.webp', 'Mobile'),
('Bufona Headphones', 'Bufona over-ear headphones', '2099', 'images/bh2.webp', 'Headphones'),
('HP Laptop', 'HP Pavilion Laptop', '56799', 'images/hp.webp', 'Laptop'),
('Bluetooth', 'Standard bluetooth accessory', '2559', 'images/bt2.webp', 'Bluetooth'),
('Samsung Laptop', 'Lenovo IdeaPad Laptop', '48999', 'images/sl.webp', 'Laptop'),
('Boat Headphones', 'High-quality boat headphones', '2559', 'images/bh1.webp', 'Headphones'),
('Lenovo PC', 'Desktop PC from Lenovo', '46999', 'images/lenovopc.webp', 'PC'),
('Lenovo Laptop', 'Lenovo IdeaPad Laptop', '48999', 'images/lenovo.webp', 'Laptop'),
('HP PC', 'HP Desktop PC', '48799', 'images/hppc.webp', 'PC'),
('Samsung Phone', 'Samsung Galaxy device', '20999', 'images/samsung.webp', 'Mobile');


select* from products;

SET SQL_SAFE_UPDATES = 0;
UPDATE products SET category = LOWER(category);

UPDATE products
SET image = REPLACE(image, '/static', '')
WHERE image LIKE '/static%';

UPDATE products
SET image = SUBSTRING(image, 2)
WHERE image LIKE '/%';

SELECT id, name, image FROM products;


SELECT image FROM products;






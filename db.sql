CREATE TABLE Products (
    id int NOT NULL AUTO_INCREMENT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    type varchar(255) DEFAULT 'item',
    image_paths varchar(255),
    name varchar(255),
    description varchar(255),
    extra_image_paths varchar(255),
    tags varchar(255),
    payment_plan_full BOOLEAN DEFAULT false,
    payment_plan_deposit BOOLEAN DEFAULT false,
    status varchar(255),
    category varchar(255),
    price DECIMAL(10,2),
    enable_tax BOOLEAN DEFAULT false,
    shipping_fee DECIMAL(10,2),
    days_to_ship varchar(255),
    min_booking_day int,
    PRIMARY KEY (id)
);

CREATE TABLE ProductOptions (
    id int NOT NULL AUTO_INCREMENT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    name varchar(255),
    stock int,
    price DECIMAL(10,2),
    sku varchar(255),
    product_id int,
    PRIMARY KEY (id),
    FOREIGN KEY (product_id) REFERENCES Products(id)
);

CREATE TABLE ProductAddons (
    id int NOT NULL AUTO_INCREMENT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    name varchar(255),
    stock int,
    price DECIMAL(10,2),
    product_id int,
    PRIMARY KEY (id),
    FOREIGN KEY (product_id) REFERENCES Products(id)
);

CREATE TABLE Campaigns (
    id int NOT NULL AUTO_INCREMENT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    type varchar(255),
    name varchar(255),
    description varchar(255),
    start_date DATE,
    start_time TIME,
    end_date DATE,
    end_time TIME,
    issue_amount int,
    usage_limit int,
    min_spend DECIMAL(10,2),
    apply_to_all_products BOOLEAN DEFAULT false,
    status varchar(255),
    discount_amount DECIMAL(10,2),
    require_promo_code BOOLEAN DEFAULT false,
    promo_code varchar(255),
    enable_free_shipping BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

CREATE TABLE CampaignProducts (
    id int NOT NULL AUTO_INCREMENT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    campaign_id int,
    product_id int,
    PRIMARY KEY (id),
    FOREIGN KEY (campaign_id) REFERENCES Campaigns(id),
    FOREIGN KEY (product_id) REFERENCES Products(id)
);

CREATE TABLE Sales (
    id int NOT NULL AUTO_INCREMENT,
    type varchar(255),
    status varchar(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    subtotal DECIMAL(10,2),
    shipping_fee DECIMAL(10,2),
    tax DECIMAL(10,2),
    total DECIMAL(10,2),
    booking_date DATETIME,
    customer_note varchar(255),
    delivery_name varchar(255),
    delivery_contact varchar(255),
    customer_name varchar(255),
    customer_contact varchar(255),
    customer_email varchar(255),
    customer_shipping_address varchar(255),
    customer_billing_address varchar(255),
    PRIMARY KEY (id)
);

CREATE TABLE SalesProducts (
    id int NOT NULL AUTO_INCREMENT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    sales_id int,
    product_id int,
    product_name varchar(255),
    quantity int,
    price DECIMAL(10,2),
    total DECIMAL(10,2),
    PRIMARY KEY (id),
    FOREIGN KEY (sales_id) REFERENCES Sales(id),
    FOREIGN KEY (product_id) REFERENCES Products(id)
);






INSERT INTO `Products` (`id`, `created_at`, `updated_at`, `type`, `image_paths`, `name`, `description`, `extra_image_paths`, `tags`, `payment_plan_full`, `payment_plan_deposit`, `status`, `category`, `price`, `enable_tax`, `shipping_fee`, `days_to_ship`, `min_booking_day`)
VALUES
	(1,'2021-01-13 14:21:21','2021-01-13 15:19:24','item',NULL,'Black Swan','good',NULL,'[\"black\", \"swan\"]',0,1,'pending','dress',888,0,NULL,NULL,NULL),
	(2,'2021-01-13 14:21:21','2021-01-13 14:21:21','service',NULL,'Shangri la Hotels','good',NULL,NULL,NULL,NULL,'live','venue',777,1,NULL,NULL,NULL)



INSERT INTO `ProductOptions` (`id`, `created_at`, `updated_at`, `name`, `stock`, `price`, `sku`, `product_id`)
VALUES
	(1,'2021-01-13 14:53:41','2021-01-13 14:53:41','Black',10,999,'BSWAN123',1),
	(2,'2021-01-13 14:53:41','2021-01-13 14:53:41','Green',10,88,'GSWAN123',1);


INSERT INTO `ProductAddons` (`id`, `created_at`, `updated_at`, `name`, `stock`, `price`, `product_id`)
VALUES
	(1,'2021-01-13 15:41:14','2021-01-13 15:41:14','Express',99,10,1);

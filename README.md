# Simple_Ecommerce_Application

A simple Ecommerce Application where users can browse electronic products, add them to a cart, and place orders — all with full front-end and back-end integration.

# Project Tasks Covered

-  Create the front-end layout using **HTML**, **CSS**, and **JavaScript**
-  Implement a back-end using **Java** to handle product data and cart management
-  Connect the front-end and back-end using **API calls (via `fetch()` in JS)**

# Features

- Product categories: Mobiles, Laptops, PCs, Bluetooth, Headphones
- Add to cart
- Search products
- Remove items from the cart
- Backend integration with MySQL

# Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Java Servlets, JDBC, Gson 
- **Database**: MySQL (via JDBC)
- **Server**: Jetty

# Required JAR Files

Make sure these JARs are added to your `lib/` folder or project dependencies:

- `mysql-connector-j-9.1.0.jar` (MySQL JDBC driver)
- `gson-2.10.1.jar` (For JSON handling)
- `javax.servlet-api-4.0.1.jar`
- Jetty Server JARs (if you're using Jetty instead of Tomcat):
     - `jetty-server-9.4.53.v20231009.jar`
     - `jetty-servlet-9.4.53.v20231009.jar`
     - `jetty-util-9.4.53.v20231009.jar`
     - `jetty-http-9.4.53.v20231009.jar`
     - `jetty-io-9.4.53.v20231009.jar`
     - `jetty-security-9.4.53.v20231009.jar`
     - `jetty-webapp-11.0.6.jar`
 
# Setup Instructions

1. **Clone the repo** or copy the files to your local project.
2. **Create the Database**:
   - Import sql file into MySQL.
3. **Configure DB Connection**:
   - Set your DB URL, username, and password in DBConnection.java
4. **Add all JARs** to your project classpath.
5. **Deploy the app** using Jetty or Tomcat.
6. Open `http://localhost:8080/index.html` in your browser.

# Output Screens

![Screenshot 2025-04-12 140948](https://github.com/user-attachments/assets/518773c6-9e42-4b15-91d4-7531fab91e98)

![Screenshot 2025-04-12 141001](https://github.com/user-attachments/assets/fe4b473e-5add-4c3b-889b-9bb1a270b02f)

![Screenshot 2025-04-12 144724](https://github.com/user-attachments/assets/19176764-6d48-427c-97f1-d13866450135)

![Screenshot 2025-04-12 141025](https://github.com/user-attachments/assets/c9c98c00-f47c-49a1-a92c-de2b133ddcbf)

![Screenshot 2025-04-12 141103](https://github.com/user-attachments/assets/e1f1bad4-abba-47f2-9db5-d068e28a2afa)







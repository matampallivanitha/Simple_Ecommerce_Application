package com.ecommerce;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBConnection {
    private static final String URL = "jdbc:mysql://localhost:3306/ecommerce";
    private static final String USER = "root"; // replace with your user
    private static final String PASSWORD = "Vanitha@4829"; // replace with your password

    public static Connection getConnection() throws SQLException {
        return DriverManager.getConnection(URL, USER, PASSWORD);
    }
}


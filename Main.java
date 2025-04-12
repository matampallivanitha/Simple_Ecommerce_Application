package com.ecommerce;

import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.server.Handler;
import org.eclipse.jetty.server.handler.HandlerList;
import org.eclipse.jetty.server.handler.ResourceHandler;
import org.eclipse.jetty.servlet.ServletContextHandler;
import org.eclipse.jetty.servlet.ServletHolder;
import org.eclipse.jetty.util.log.Log;
import org.eclipse.jetty.util.log.Logger;

public class Main {
    public static void main(String[] args) throws Exception {
        // Inline silent logger to suppress Jetty logs
        Log.setLog(new Logger() {
            @Override public String getName() { return "silent"; }
            @Override public void warn(String msg, Object... args) {}
            @Override public void warn(Throwable thrown) {}
            @Override public void warn(String msg, Throwable thrown) {}
            @Override public void info(String msg, Object... args) {}
            @Override public void info(Throwable thrown) {}
            @Override public void info(String msg, Throwable thrown) {}
            @Override public boolean isDebugEnabled() { return false; }
            @Override public void setDebugEnabled(boolean enabled) {}
            @Override public void debug(String msg, Object... args) {}
            @Override public void debug(String msg, long value) {}
            @Override public void debug(Throwable thrown) {}
            @Override public void debug(String msg, Throwable thrown) {}
            @Override public Logger getLogger(String name) { return this; }
            @Override public void ignore(Throwable ignored) {} //  Required in newer Jetty
        });

        Server server = new Server(8080);

        // Static file handler
        ResourceHandler staticHandler = new ResourceHandler();
        staticHandler.setDirectoriesListed(false);
        staticHandler.setWelcomeFiles(new String[]{"index.html"});
        staticHandler.setResourceBase("C:\\Users\\matam\\OneDrive\\Desktop\\EcommerceApp\\static");

        // Servlet handler
        ServletContextHandler servletHandler = new ServletContextHandler(ServletContextHandler.SESSIONS);
        servletHandler.setContextPath("/");
        servletHandler.addServlet(new ServletHolder(new ProductServlet()), "/products");

        // Combine handlers
        HandlerList handlers = new HandlerList();
        handlers.setHandlers(new Handler[]{staticHandler, servletHandler});
        server.setHandler(handlers);

        server.start();
        System.out.println("Server started at http://localhost:8080");
        server.join();
    }
}

package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

// @RestController tells Spring Boot this class handles HTTP requests
@RestController
public class HelloController {

    // @GetMapping defines a GET endpoint at /api/hello
    @GetMapping("/api/hello")
    public String sayHello() {
        return "Hello from Spring Boot!";
    }
}
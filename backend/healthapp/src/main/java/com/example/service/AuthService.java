package com.example.service;

import com.example.model.User;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    public String authenticate(User user) {
        // Dummy auth logic
        if ("admin".equals(user.getUsername()) && "pass".equals(user.getPassword())) {
            return "token-123";
        }
        return "unauthorized";
    }
}
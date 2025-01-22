package com.genie.Venue_Mangamnet.controller;

import com.genie.Venue_Mangamnet.dto.LoginDto;
import com.genie.Venue_Mangamnet.dto.UserDto;
import com.genie.Venue_Mangamnet.dto.UserRegistrationDto;
import com.genie.Venue_Mangamnet.service.AuthService;
import com.genie.Venue_Mangamnet.service.TokenBlacklistService;
import com.genie.Venue_Mangamnet.util.JwtUtil;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.naming.AuthenticationException;
import java.util.HashMap;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:8080, http://localhost:3000")
public class AuthController {
    @Autowired
    private AuthService authService;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private TokenBlacklistService tokenBlacklistService;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody UserRegistrationDto registrationDto) {
        UserDto registeredUser = authService.registerUser(registrationDto);
        return ResponseEntity.ok(registeredUser);
    }

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginDto loginDto) throws AuthenticationException {
        String token = authService.authenticateUser(loginDto);
        return ResponseEntity.ok(new HashMap<String, String>() {{
            put("token", token);
            put("type", "Bearer");
        }});
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpServletRequest httpServletRequest) {
        String authHeader = httpServletRequest.getHeader("Authorization");

        if(authHeader != null && authHeader.startsWith("Bearer ")) {
            String token = authHeader.substring(7);
            tokenBlacklistService.addToBlackList(token);
            System.out.println("Token added to blacklist: " + token);

            return ResponseEntity.ok(new HashMap<String, String>() {{
                put("message", "Logout successful");
            }});
        } else {
            return ResponseEntity.badRequest().body(new HashMap<String, String>() {{
                put("message", "Authorization header is missing or invalid");
            }});
        }
    }


//    @GetMapping("/fund-transfer")
//    public String secureApi(@RequestHeader(value = "Authorization", required = false) String authorizationHeader) {
//        if(authorizationHeader != null && authorizationHeader.startsWith("Bearer ")){
//            String token = authorizationHeader.substring(7);
//
//            //validating the token
//            if(jwtUtil.validateToken(token)) {
//                return "This is secured API, token validated";
//            } else{
//                return "Invalid Token";
//            }
//        } else{
//            return "Auth header is missing";
//        }
//    }



}

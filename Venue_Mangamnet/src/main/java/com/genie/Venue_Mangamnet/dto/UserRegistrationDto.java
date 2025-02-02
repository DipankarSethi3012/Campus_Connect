package com.genie.Venue_Mangamnet.dto;

import com.genie.Venue_Mangamnet.entity.Role;

public class UserRegistrationDto {
    private String username;
    private String email;
    private String password;
    private Role role;
    private String clubName;
    private String adminDepartment;

    UserRegistrationDto(){

    }

    public UserRegistrationDto(String username, String email, String password, Role role, String clubName, String adminDepartment) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
        this.clubName = clubName;
        this.adminDepartment = adminDepartment;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public String getClubName() {
        return clubName;
    }

    public void setClubName(String clubName) {
        this.clubName = clubName;
    }

    public String getAdminDepartment() {
        return adminDepartment;
    }

    public void setAdminDepartment(String adminDepartment) {
        this.adminDepartment = adminDepartment;
    }
}

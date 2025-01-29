package com.genie.Venue_Mangamnet.dto;

public class ClubsDto {

    private String name;
    private String description;
    private String category;
    private String email;

    public ClubsDto(){}

    public ClubsDto(String name, String description, String category, String email) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "ClubsDto{" +
                "name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", category='" + category + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}

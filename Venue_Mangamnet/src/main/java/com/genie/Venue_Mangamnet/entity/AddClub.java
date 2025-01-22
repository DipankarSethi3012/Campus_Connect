package com.genie.Venue_Mangamnet.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "clubs")
public class AddClub {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long club_id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private String category;


    public AddClub(){}

    public AddClub(Long club_id, String name, String description, String category) {
        this.club_id = club_id;
        this.name = name;
        this.description = description;
        this.category = category;
//        this.email = email;
    }

    public String getName(){
        return name;
    }

    public Long getClub_id() {
        return club_id;
    }

    public void setClub_id(Long club_id) {
        this.club_id = club_id;
    }

    public String name() {
        return name;
    }

    public void name(String name) {
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

    @Override
    public String toString() {
        return "AddClub{" +
                "club_id=" + club_id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", Category='" + category + '\'' +

                '}';
    }
}

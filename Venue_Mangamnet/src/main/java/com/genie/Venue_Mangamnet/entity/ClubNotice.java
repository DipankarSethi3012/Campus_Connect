package com.genie.Venue_Mangamnet.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "club_notice")
public class ClubNotice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long Id;
    @Column(nullable = false)
    String clubName;

    @Column(nullable = false)
    String heading;

    @Column(nullable = false)
    String description;

   public ClubNotice(){

    }

    public ClubNotice(Long id, String clubName, String heading, String description) {
        Id = id;
        this.clubName = clubName;
        this.heading = heading;
        this.description = description;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getClubName() {
        return clubName;
    }

    public void setClubName(String clubName) {
        this.clubName = clubName;
    }

    public String getHeading() {
        return heading;
    }

    public void setHeading(String heading) {
        this.heading = heading;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}

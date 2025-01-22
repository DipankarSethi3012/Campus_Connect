package com.genie.Venue_Mangamnet.controller;

import com.fasterxml.jackson.core.JsonPointer;
import com.genie.Venue_Mangamnet.dto.ClubsDto;
import com.genie.Venue_Mangamnet.entity.AddClub;
import com.genie.Venue_Mangamnet.entity.ClubEvent;
import com.genie.Venue_Mangamnet.entity.EventStatus;
import com.genie.Venue_Mangamnet.entity.User;
import com.genie.Venue_Mangamnet.service.AddClubService;
import com.genie.Venue_Mangamnet.service.ClubEventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/admin")
@PreAuthorize("hasRole('ADMIN')")
@CrossOrigin(origins = "http://localhost:8080, http://localhost:3000")
public class AdminController {

    @Autowired
    private AddClubService addClubService;

    @Autowired
    private ClubEventService clubEventService;

    @GetMapping("/dashboard")
    public List<ClubEvent> getAdminDashBoard() {
        return clubEventService.findAllEvents();
    }

    @PostMapping("/addclub")
    public ResponseEntity<?> addClub(@RequestBody ClubsDto addClub){
        System.out.println(addClub.toString());
        ClubsDto registeredClub =  addClubService.addClub(addClub);
        return ResponseEntity.ok(registeredClub);
    }

    @GetMapping("/getclubs")
    public List<AddClub> getClubs(){
        return addClubService.getAllClubs();
    }

    @PutMapping("/approve-event/{eventId}")
    public String approveEvent(@PathVariable Long eventId) {
        System.out.println("here reached");
        String response = clubEventService.approveEvent(eventId);
        return response;
    }

    @PutMapping("/decline-event/{eventId}")
    public String declineEvent(@PathVariable Long eventId) {
        String response = clubEventService.declineEvent(eventId);
        return response;
    }

    @GetMapping("/approved-events")
    public List<ClubEvent> getApprovedEvents() {

        return clubEventService.findEventByStatus(EventStatus.APPROVED);
    }

    @GetMapping("/pending-events")
    public List<ClubEvent> getPendingEvents() {
        return clubEventService.findEventByStatus(EventStatus.PENDING);
    }

    @GetMapping("/declined-events")
    public List<ClubEvent> getDeclinedEvents() {
        return clubEventService.findEventByStatus(EventStatus.DECLINED);
    }

//    @GetMapping("/profile")
//    public User getProfile(){
//
//    }
}

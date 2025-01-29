package com.genie.Venue_Mangamnet.controller;

import com.genie.Venue_Mangamnet.entity.ClubEvent;
import com.genie.Venue_Mangamnet.entity.ClubNotice;
import com.genie.Venue_Mangamnet.service.ClubEventService;
import com.genie.Venue_Mangamnet.service.ClubNoticeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/club")
@PreAuthorize("hasAnyRole('ADMIN', 'CLUB_MEMBER')")
@CrossOrigin(origins = "http://localhost:8080, http://localhost:3000")
public class ClubEventController {

    @Autowired
    private ClubEventService clubEventService;

    @Autowired
    private ClubNoticeService clubNoticeService;

    @GetMapping("/dashboard")
    public String clubDashBoard(){

        return "Club Member Dashboard";
    }
    @PostMapping("/post-event")
    public ClubEvent postEvent(@RequestBody ClubEvent clubEvent){

        return clubEventService.addNewEvent(clubEvent);
    }

    @GetMapping("/get-event")
    public ClubEvent getEvent(@RequestBody String eventName) {

        return clubEventService.getEventByEventName(eventName);
    }

    @PostMapping("/add-notice")
    public ClubNotice clubNotice(@RequestBody ClubNotice clubNotice) {
        return clubNoticeService.saveNotice(clubNotice);
    }

    @GetMapping("/get-notice")
    public List<ClubNotice> getAllNotice(){
        return clubNoticeService.getAllNotice();
    }

    @DeleteMapping("/delete-notice/{noticeId}")
    public boolean deleteNotice(@PathVariable Long noticeId) {
        boolean ans = clubNoticeService.deleteNoticeById(noticeId);
        return  ans;
    }
}

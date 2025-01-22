package com.genie.Venue_Mangamnet.controller;
import com.genie.Venue_Mangamnet.entity.AddClub;
import com.genie.Venue_Mangamnet.entity.ClubEvent;
import com.genie.Venue_Mangamnet.entity.ClubNotice;
import com.genie.Venue_Mangamnet.entity.EventStatus;
import com.genie.Venue_Mangamnet.service.AddClubService;
import com.genie.Venue_Mangamnet.service.ClubEventService;
import com.genie.Venue_Mangamnet.service.ClubNoticeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/student")
@PreAuthorize("hasAnyRole('STUDENT', 'ADMIN')")
public class StudentController {

    @Autowired
    private ClubEventService clubEventService;

    @Autowired
    private ClubNoticeService clubNoticeService;

    @Autowired
    private AddClubService addClubService;

    @GetMapping("/dashboard")
      public List<ClubEvent> getApprovedEvents() {
        return clubEventService.findEventByStatus(EventStatus.APPROVED);
    }

    @GetMapping("/approved-club-events")
    public List<ClubEvent> getApprovedClubEvents(@RequestParam String clubName) {
        return clubEventService.findByClubName(clubName, EventStatus.APPROVED);
    }

    @GetMapping("/get-notice")
    public List<ClubNotice> getAllClubNotice() {
        return clubNoticeService.getAllNotice();
    }

    @GetMapping("/get-clubs")
    List<AddClub> getAllClubs(){
        return addClubService.getAllClubs();
    }
}

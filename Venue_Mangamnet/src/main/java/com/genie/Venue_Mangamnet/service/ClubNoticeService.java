package com.genie.Venue_Mangamnet.service;

import com.genie.Venue_Mangamnet.entity.ClubNotice;
import com.genie.Venue_Mangamnet.repo.ClubNoticeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClubNoticeService {

    @Autowired
    private ClubNoticeRepo clubNoticeRepo;

    public ClubNotice saveNotice(ClubNotice clubNotice){
        return clubNoticeRepo.save(clubNotice);
    }

    public List<ClubNotice> getAllNotice(){
        return clubNoticeRepo.findAll();
    }

    public boolean deleteNoticeById(long Id) {
        boolean notice = clubNoticeRepo.existsById(Id);
        if(notice){
            clubNoticeRepo.deleteById(Id);
            System.out.println("Notice delete successfully");
            return true;
        }

        System.out.println("No notice found with given notice id");
        return false;
    }
}

package com.genie.Venue_Mangamnet.service;

import com.genie.Venue_Mangamnet.config.SecurityConig;
import com.genie.Venue_Mangamnet.dto.ClubsDto;
import com.genie.Venue_Mangamnet.entity.AddClub;
import com.genie.Venue_Mangamnet.repo.ADDClubRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AddClubService {

    @Autowired
    private ADDClubRepo addClubRepo;

    public ClubsDto addClub(ClubsDto addClub){
        if(addClubRepo.existsByName(addClub.getName())){
            throw new SecurityConig.UserAlreadyExistsException("Username is already taken!");
        }

        AddClub club = new AddClub();
        club.name(addClub.getName());
        club.setCategory(addClub.getCategory());
        club.setDescription(addClub.getDescription());
//        club.setEmail(addClub.getEmail());

        addClubRepo.save(club);
        return convertToDto(club);
    }

    private ClubsDto convertToDto(AddClub addClub){
        ClubsDto clubsDto = new ClubsDto();
        clubsDto.setName(addClub.name());
        clubsDto.setDescription(addClub.getDescription());
        clubsDto.setCategory(addClub.getCategory());
//        clubsDto.setEmail(addClub.getEmail());

        return clubsDto;
    }

    public List<AddClub> getAllClubs(){

        return addClubRepo.findAll();
    }
}

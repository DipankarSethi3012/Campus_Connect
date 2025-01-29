package com.genie.Venue_Mangamnet.repo;

import com.genie.Venue_Mangamnet.entity.AddClub;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ADDClubRepo extends JpaRepository<AddClub , Long> {
    boolean existsByName(String name);
}

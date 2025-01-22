package com.genie.Venue_Mangamnet.repo;

import com.genie.Venue_Mangamnet.entity.ClubNotice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClubNoticeRepo extends JpaRepository<ClubNotice, Long> {

}

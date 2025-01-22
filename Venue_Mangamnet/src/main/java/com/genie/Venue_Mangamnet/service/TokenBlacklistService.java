package com.genie.Venue_Mangamnet.service;
import java.util.*;
import org.springframework.stereotype.Service;

@Service
public class TokenBlacklistService {

  private final Set<String> blackList = new HashSet<>();

  public void addToBlackList(String token) {
      blackList.add(token);
  }

  public boolean isBlackListed(String token) {
      if(blackList.contains(token)) return true;
      return false;
  }

}

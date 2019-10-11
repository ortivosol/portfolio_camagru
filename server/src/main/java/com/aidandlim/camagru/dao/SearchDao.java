package com.aidandlim.camagru.dao;

import com.aidandlim.camagru.dto.Post;
import com.aidandlim.camagru.dto.Search;
import com.aidandlim.camagru.dto.User;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface SearchDao {

    Search select(User user);
    ArrayList<User> selectUserByKeyword(Search search);
    ArrayList<Post> selectPostByKeyword(Search search);

}

package com.first.service;

import com.first.mapper.UserMapper;
import com.first.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;
import java.util.List;

@Service
public class userService {
    @Autowired
    private UserMapper userMapper;

    public boolean loginVerify(String username, String password) {
        List<User> res = userMapper.isExist(username, password);
        System.out.println(res);
        return res.size() != 0;
    }

    public String isOnline(HttpSession httpSession) {
        String username = (String) httpSession.getAttribute("user");
        if (null == username)
            return null;
        else {
            System.out.println(username);
            return username;
        }
    }
}

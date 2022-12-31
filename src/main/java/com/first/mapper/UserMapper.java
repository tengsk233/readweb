package com.first.mapper;

import com.first.pojo.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface UserMapper {
    List<User> queryUserList();
    User queryUserByID(String userID);
    int addUser(User user);
    int deleteUserByID(String ID);
    List<User> isExist(@Param("userID") String userID,@Param("password") String password);
}

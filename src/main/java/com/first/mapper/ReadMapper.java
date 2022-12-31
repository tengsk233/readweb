package com.first.mapper;

import com.first.pojo.Chapter;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface ReadMapper {
    Chapter findAddress(@Param("bookID") String bookID, @Param("OofC") int OofC);
    int countChapter(@Param("bookID") String bookID);
}

package com.first.mapper;

import com.first.pojo.Book;
import com.first.pojo.Comment;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CommentMapper {
    int Add(Comment comment);
}

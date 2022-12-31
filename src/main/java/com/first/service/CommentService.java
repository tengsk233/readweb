package com.first.service;

import com.first.mapper.CommentMapper;
import com.first.pojo.Comment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommentService {
    @Autowired
    private CommentMapper commentMapper;
    public void addcom(Comment c){
        commentMapper.Add(c);
    }
}

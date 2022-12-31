package com.first.service;

import com.first.mapper.BookMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class bookService {
    @Autowired
    private BookMapper bookMapper;

}

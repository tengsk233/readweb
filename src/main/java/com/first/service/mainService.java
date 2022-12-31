package com.first.service;

import com.first.mapper.BookMapper;
import com.first.pojo.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class mainService {
    @Autowired
    private BookMapper bookMapper;
    public List<Book> searchbook(String searchInfo){
        List<Book> list = bookMapper.queryBookByName(searchInfo);
        list.addAll(bookMapper.queryBookByAuthor(searchInfo));
        list.add(bookMapper.queryBookByID(searchInfo));
        System.out.println(list.size());
        return list;
    }
    public List<Book> getInitailBookList(){
        System.out.println("执行初始化前");
        List<Book> bookList=bookMapper.queryInitialBookList();
        return bookList;
    }
    public Book getBookByID(String bookID){
        return bookMapper.queryBookByID(bookID);
    }
    public List<Book> getBookByLabel(String label){return bookMapper.queryBookByType(label);}
}

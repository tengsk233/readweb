package com.first.mapper;

import com.first.pojo.Book;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface BookMapper {
    List<Book> queryBookByAuthor(String author);
    Book queryBookByID(String bookID);
    List<Book> queryBookByType(String lab01);
    List<Book> queryBookByName(String bookName);
    List<Book> queryInitialBookList();
    List<Book> queryFavoriteBook(String userID,String bookLabel);
    int addFavoriteBook(@Param("userID") String userID,@Param("bookID") String bookID);
    int deleteFavoriteBook(@Param("userID") String userID,@Param("bookID") String bookID);
}

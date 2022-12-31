package com.first.control;

import com.first.mapper.BookMapper;
import com.first.pojo.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
public class bookshelfControl {
    @Autowired
    BookMapper bookMapper;
    @RequestMapping("/bookshelf_do")
    public  String bookshelf_do(@RequestParam("bookLabel") String bookLable, Model model, HttpSession httpSession){
        String userID= (String) httpSession.getAttribute("user");
        System.out.println(userID);
        List<Book> resultBookList=bookMapper.queryFavoriteBook(userID,bookLable);
        model.addAttribute("resultBookList",resultBookList);
        return "bookshelf";
    }
    @RequestMapping("/delete_do")
    public  String delete_do(@RequestParam("bookID") String bookID,Model model,HttpSession httpSession){
        String userID= (String) httpSession.getAttribute("user");
        System.out.println(userID);
        bookMapper.deleteFavoriteBook(userID,bookID);
        List<Book> resultBookList=bookMapper.queryFavoriteBook(userID,"/");
        model.addAttribute("resultBookList",resultBookList);
        return "bookshelf";
    }
}

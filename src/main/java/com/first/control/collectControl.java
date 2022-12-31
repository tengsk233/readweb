package com.first.control;

import com.first.mapper.BookMapper;
import com.first.pojo.Book;
import com.first.service.mainService;
import com.mysql.cj.xdevapi.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

@Controller
public class collectControl {
    @Autowired
    private BookMapper bookMapper;
    @Autowired
    private mainService mainService;
    @RequestMapping("/collect_do")
    public String collect(@RequestParam("bookID") String bookID, Model model, HttpSession httpSession){
        String userID=(String) httpSession.getAttribute("user");
        System.out.println(userID+' '+bookID);
        Connection c;
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            c= DriverManager.getConnection("jdbc:mysql://localhost:3306/bookweb?serverTimezone=UTC","root","wushudi1");
            Statement s=c.createStatement();
            s.execute("insert into bookshelf values(\""+userID+"\", \""+bookID+"\");");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        Book book=mainService.getBookByID(bookID);
        model.addAttribute("book",book);
        return "bookdetail";
    }
}

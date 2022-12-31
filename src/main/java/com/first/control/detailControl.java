package com.first.control;

import com.first.pojo.Book;
import com.first.service.bookService;
import com.first.service.mainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpSession;
import java.util.Arrays;
import java.util.List;

@Controller
public class detailControl {
    @Autowired
    private mainService mainService;
    @RequestMapping("/bookdetail_do")
    public String detail_do(@RequestParam("bookID") String bookID, Model model, HttpSession httpSession){
        Book book=mainService.getBookByID(bookID);
        model.addAttribute("book",book);
        Object historyBook= (List<Book>) httpSession.getAttribute("historyBook");
        if(historyBook==null){
            List<Book> list= Arrays.asList(book);
            httpSession.setAttribute("historyBook",list);
        }
        else{
            /*List<Book> list= (List<Book>) historyBook;*/
           List<Book> list = Arrays.asList();
           //list.add(mainService.getBookByID(bookID));
        }
        return "bookdetail";
    }
}

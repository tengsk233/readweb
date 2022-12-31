package com.first.control;

import com.first.pojo.Book;
import com.first.service.mainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
public class categoryControl {
    @Autowired
    private mainService mainService;
    @RequestMapping("/category_do")
    public String category(@RequestParam("bookLabel") String label, Model model){
        List<Book> bookList=mainService.getBookByLabel(label);
        model.addAttribute("resultBookList",bookList);

        return "category";
    }
}

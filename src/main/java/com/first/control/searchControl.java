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
public class searchControl {
    @Autowired
    private mainService mainService;
    @RequestMapping("/search_do")
    public String search(@RequestParam("searchInfo") String searchInfo, Model model) {
        List<Book> list = mainService.searchbook(searchInfo);
        System.out.println(searchInfo+list.get(0).getBook_name());
        model.addAttribute("resultBookList", list);
        return "search";
    }
}

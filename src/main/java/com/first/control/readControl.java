package com.first.control;

import com.first.pojo.Chapter;
import com.first.service.readService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import java.io.BufferedReader;
import java.io.IOException;

@Controller
public class readControl {
    @Autowired
    private readService rs;
    @RequestMapping(value = "/read")
    public  String read(@RequestParam("bookID") String bookID,
                         @RequestParam("OofC") String OofC,
                         Model model) throws IOException {
        System.out.println("阅读");
        int order =Integer.parseInt(OofC);
        Chapter chapter=rs.findChapter(bookID, order);
        BufferedReader br=rs.findReader(chapter);
        int countChapter=rs.countChapter(bookID);
        int NofP =rs.getNofP(chapter);
        String last;
        String next;
        if(order<1)
            last="true";
        else
            last="false";
        if(order>countChapter-2)
            next="true";
        else
            next="false";
        String lastOrder=String.valueOf(order-1);
        String nextOrder=String.valueOf(order+1);
        model.addAttribute("chapter",chapter);
        model.addAttribute("reader",br);
        model.addAttribute("lastOrder",lastOrder);
        model.addAttribute("nextOrder",nextOrder);
        model.addAttribute("countChapter",countChapter);
        model.addAttribute("NofP",NofP);
        model.addAttribute("last",last);
        model.addAttribute("next",next);
        return "read";
        }
    }

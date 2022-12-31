package com.first.control;

import com.first.pojo.Comment;
import com.first.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class AjaxControl {
    @Autowired
    private CommentService commentService;
    @RequestMapping("/ajax")
    @ResponseBody   //设置返回值为string
    public String Ajax_Control(String content, String name,  String articleId){
        int a=666;
        System.out.println(content);
        System.out.println(name);
        System.out.println(articleId);
        commentService.addcom(new Comment(articleId,name,content));
        return name;
    }
}

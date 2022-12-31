package com.first.config;

import com.first.pojo.Book;
import com.first.service.mainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.Arrays;
import java.util.List;

public class initializeConfig implements HandlerInterceptor {
    @Autowired
    private mainService mainservice;

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        System.out.println("成功执行");
        HttpSession httpSession=request.getSession();
        List<Book> bookList = (List<Book>)httpSession.getAttribute("bookList");
        System.out.println(bookList);
        if(bookList==null){
            System.out.println("进入");
            bookList = mainservice.getInitailBookList();
            List<Book> topBookList= Arrays.asList( bookList.get(0),bookList.get(1),bookList.get(2));
            List<Book> bottomBookList= Arrays.asList( bookList.get(3),bookList.get(4),bookList.get(5), bookList.get(6),bookList.get(7),bookList.get(8),
                    bookList.get(9),bookList.get(10),bookList.get(11), bookList.get(12),bookList.get(13),bookList.get(14));
            List<Book> rightBookList= Arrays.asList( bookList.get(15),bookList.get(6),bookList.get(17),bookList.get(18),bookList.get(19));
            System.out.println("返回成功");
            httpSession.setAttribute("topBookList",topBookList);
            httpSession.setAttribute("bottomBookList",bottomBookList);
            httpSession.setAttribute("rightBookList",rightBookList);
            System.out.println(httpSession.getAttributeNames());
            /*model.addAttribute("booklist",bookList);*/
        }
    }
}

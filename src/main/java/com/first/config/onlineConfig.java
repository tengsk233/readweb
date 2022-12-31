package com.first.config;

import com.first.service.userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class onlineConfig implements HandlerInterceptor {
    @Autowired
    private userService userService;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String username=userService.isOnline(request.getSession());
        if(null==username){
            request.getRequestDispatcher("/mainTologin").forward(request,response);
            return false;
        }
        else
            return true;
    }
}

package com.first.control;

import com.first.service.userService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;

@Controller
public class loginControl {
    @Autowired
    private userService userService;
    @RequestMapping(value = {"/user/login"},method = RequestMethod.POST)
    public  String login(@RequestParam("username") String username,
                         @RequestParam("password") String password,
                         Model model, HttpSession httpSession)
    {
        System.out.println(username+password);
        if(userService.loginVerify(username,password)){
            httpSession.setAttribute("user",username);
            return "redirect:/bookshelf_do?bookLabel=/";
        }
        else{
            model.addAttribute("msg","用户名或密码错误");
            System.out.println("weichengg");
            return "login";
        }
    }
    @RequestMapping("/logout_do")
    public String logout(HttpSession httpSession){
        httpSession.removeAttribute("user");
        return "redirect:/";
    }

    @RequestMapping(value = {"/mainTologin","main"})
    public String mainTologin(){
        return "login";
    }
    /*@RequestMapping("/user/login")
    public String hello(){
    return "index";
    }*/
}

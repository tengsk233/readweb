package com.first.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class MyWebConfig implements WebMvcConfigurer {
    @Bean
    public initializeConfig MyInterceptor(){
        return new initializeConfig();
    }
    @Bean
    public onlineConfig onlineConfig(){return  new onlineConfig();}
    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        WebMvcConfigurer.super.addViewControllers(registry);
        registry.addViewController("/").setViewName("index");
        registry.addViewController("/index.html").setViewName("index");
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(MyInterceptor()).addPathPatterns("/");
        registry.addInterceptor(onlineConfig()).addPathPatterns("/bookshelf_do","/collect_do");
        System.out.println("已配置");
    }
}

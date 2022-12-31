package com.first.service;

import com.first.mapper.ReadMapper;
import com.first.pojo.Chapter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;

@Service
public class readService {
    @Autowired
    private ReadMapper readMapper;
    public  BufferedReader findReader(Chapter chapter) throws IOException {
        ClassPathResource cpr= new ClassPathResource(chapter.getAddress());
        File file =cpr.getFile();
        return new BufferedReader(new FileReader(file));
    }
    public Chapter findChapter(String bookID, int OofC) {
        return readMapper.findAddress(bookID, OofC);
    }
    public int countChapter(String bookID) {
        return readMapper.countChapter(bookID);
    }
    public int getNofP(Chapter chapter) throws IOException {
        ClassPathResource cpr= new ClassPathResource(chapter.getAddress());
        File file =cpr.getFile();
        BufferedReader br=new BufferedReader(new FileReader(file));
        int count=0;
        while(br.readLine()!=null)
            ++count;
        br.close();
        return count;
    }
}

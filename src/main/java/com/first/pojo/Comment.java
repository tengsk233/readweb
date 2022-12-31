package com.first.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class Comment {
    private String book_id;
    private String username;
    private String comment;
    private int approval=0;
    public Comment(String id,String name,String comment){
        this.book_id=id;
        this.username=name;
        this.comment=comment;
    }
}

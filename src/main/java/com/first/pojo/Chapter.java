package com.first.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Chapter {
    private String bookID;
    private int OofC;
    private String chapter;
    private String address;
}
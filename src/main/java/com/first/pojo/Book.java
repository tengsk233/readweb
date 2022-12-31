package com.first.pojo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Book {
    private String book_id;
    private String book_name;
    private String author;
    private String publishing_house;
    private  String translator;
    private String year_of_publication;
    private int Pages;
    private String original_price;
    private String current_price;
    private float score;
    private int number_of_people;
    private String brief_introduction;
    private String author_introduction;
    private String catalog;
    private String label;
    private String img_url;
}

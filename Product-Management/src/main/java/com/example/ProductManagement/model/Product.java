package com.example.ProductManagement.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Table(name = "Product Details")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "Product Id")
    private Integer id;
    @Column(name = "Product Name")
    private String productName;
    @Column(name = "Product Discription")
    private String discription;
    @Column(name = "Price")
    private Double price;
    @Column(name = "Availability")
    private String status;

}

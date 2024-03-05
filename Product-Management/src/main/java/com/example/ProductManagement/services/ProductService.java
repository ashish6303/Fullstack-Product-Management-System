package com.example.ProductManagement.services;

import com.example.ProductManagement.model.Product;
import com.example.ProductManagement.repository.ProductRepository;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface ProductService {

    public Product saveProduct(Product product);

    public List<Product> getAllProduct();

    public Product getProductById(Integer id);

    public void deleteProductById(Integer id);

    public ResponseEntity<?> updateProductById(Product product);


}

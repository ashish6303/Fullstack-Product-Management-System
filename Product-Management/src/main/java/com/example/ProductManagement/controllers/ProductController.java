package com.example.ProductManagement.controllers;

import com.example.ProductManagement.model.Product;
import com.example.ProductManagement.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


@Controller
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/product")
public class ProductController {

    @Autowired
    ProductService productService;
    @PostMapping("/post")
    public ResponseEntity<?> addProduct(@RequestBody Product product)
    {
        if (!product.getProductName().isEmpty() && !product.getDiscription().isEmpty() )
        {
            productService.saveProduct(product);
            return ResponseEntity.ok("Product has been added");
        }else{
            return ResponseEntity.ok("Please Enter Product Name and Description");
        }

    }

    @GetMapping("/getAll")
    public ResponseEntity<?> getAllProduct()
    {
        return new ResponseEntity<>(productService.getAllProduct(),HttpStatus.OK);
    }

    @GetMapping("/getById/{id}")
    public ResponseEntity<?> getById(@PathVariable Integer id)
    {
        return new ResponseEntity<>(productService.getProductById(id), HttpStatus.OK);
    }

    @DeleteMapping("/deleteById/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable Integer id)
    {
        productService.deleteProductById(id);
//        return new ResponseEntity<>("Record has been deleted successfully", HttpStatus.OK);
        return ResponseEntity.ok("Record is deleted Successfully");
    }

    @PutMapping("/updateById/{id}")
    public ResponseEntity<?> updateProduct(@RequestBody Product product)
    {
        ResponseEntity<?> updatedProduct = (productService.updateProductById(product));
//        return new ResponseEntity<>(updatedProduct.getBody(),updatedProduct.getStatusCode());
        return ResponseEntity.ok("Record is Updated Successfully");
    }


}

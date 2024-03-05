package com.example.ProductManagement.services;

import com.example.ProductManagement.model.Product;
import com.example.ProductManagement.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    ProductRepository productRepository;

    @Override
    public Product saveProduct(Product product) {
        return productRepository.save(product);
//    }
//        if (product.getProductName() != null && !product.getProductName().isEmpty()) {
//            return productRepository.save(product);

    }

    @Override
    public List<Product> getAllProduct() {
        return productRepository.findAll();
    }

    @Override
    public Product getProductById(Integer id) {
        return productRepository.findById(id).get();
    }

    @Override
    public void deleteProductById(Integer id) {
        Product deleteProduct = productRepository.findById(id).get();
        if (deleteProduct!=null){
            productRepository.delete(deleteProduct);
        }
    }

    public ResponseEntity<?> updateProductById(Product product){
        Optional<Product> productToUpdate = productRepository.findById(product.getId());
        if(productToUpdate.isPresent())
        {
            Product existingProduct = productToUpdate.get();
            existingProduct.setProductName(product.getProductName());
            existingProduct.setDiscription(product.getDiscription());
            existingProduct.setPrice(product.getPrice());
            existingProduct.setStatus(product.getStatus());
            Product updatedProduct = productRepository.save(existingProduct);
            return new ResponseEntity<>(updatedProduct, HttpStatus.OK);
        }else
        {
            return new ResponseEntity<>("Product Not Found", HttpStatus.NOT_FOUND);
        }
    }

}

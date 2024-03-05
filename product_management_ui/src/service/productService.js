import axios from 'axios';

// This is the URL of the server side application. The server side application is running on port 8080.
const API_URL = "http://localhost:8080/product";

class ProductService{

    // This is a service class for the product management application. The service class is responsible for making the HTTP request to the server.
    // The name of function must be same as the name of the function in the controller class of the server side.
    saveProduct(product){
        return axios.post(API_URL + "/post", product);
    }

    getAllProduct()
    {
        return axios.get(API_URL + "/getAll");
    }
    
    getProductById(id)
    {
        return axios.get(API_URL + "/getById/" + id);
    }

    deleteProductById(id)
    {
        return axios.delete(API_URL + "/deleteById/" + id);
    }

    updateProduct(product){
        return axios.put(API_URL + "/updateById/" + product.id, product);
    }

}

export default new ProductService();
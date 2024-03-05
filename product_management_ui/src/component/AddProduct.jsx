import React from 'react'
import { useState } from 'react'
import productService from '../service/productService'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const AddProduct = () => {

    const [product , setProduct] = useState({
        productName: '',
        discription: '',
        price: '',
        status: ''
    })  

    const handleChange = (e) => { 
        setProduct({ ...product, [e.target.name]: e.target.value })
    }

    const [msg, setMsg] = useState('');

    const navigate = useNavigate();

    const productRegister = (e) => {
        e.preventDefault()
        productService.saveProduct(product)
        .then((res) => {
            console.log("Product added successfully");
            setMsg("Product added successfully");
            setProduct({
                productName: '',
                discription: '',
                price: '',
                status: '',
            });
            toast.success(res.data);
            navigate("/");
        }).catch((err) => {
            console.log(err);
        })
    }

  return (
    <>
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header fs-3 text-center">Add Product</div>
                        {
                            msg &&

                            <p className='fs-4 text-center text-success'>{msg}</p>
                        }
                        <div className="card-body">
                            <form onSubmit={(e) => productRegister(e)}>
                                <div className="mb-3">
                                    <label htmlFor="">Enter Product Name</label>
                                    <input type="text" name="productName" className='form-control' onChange={(e) => handleChange(e)} 
                                    value={product.productName}/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="">Enter Discription</label>
                                    <input type="text" name="discription" className='form-control' onChange={(e) => handleChange(e)}
                                    value={product.discription }/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="">Enter Price</label>
                                    <input type="text" name="price" className='form-control' 
                                    onChange={(e) => handleChange(e)}
                                    value={product.price } />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="">Enter Status</label>
                                    <input type="text" name="status" className='form-control' 
                                    onChange={(e) => handleChange(e)}
                                    value={product.status } />
                                </div>
                                <button className='btn btn-primary col-md-12'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default AddProduct
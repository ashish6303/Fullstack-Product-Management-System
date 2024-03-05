import React from 'react'
import { useState,useEffect } from 'react';
import productService from '../service/productService';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Home = () => {

    const [productList,setProductList] = useState([]);
    const [msg, setMsg] = useState('');

    useEffect(()=>{
        init();
    },[]);

    const init = () => {
        productService
        .getAllProduct()
        .then((res) => {
            console.log(res.data);
            setProductList(res.data);
            
        })
        .catch((error) =>{
            console.log(error);
        })
    }

    const deleteProduct = (id) => {
        productService 
          .deleteProductById(id)
          .then((res)=>{
            setMsg("Message is deleted successfully");
            toast.success(res.data);
            init();
          })
          .catch((error) => {
            toast.error(error);
          });
        };
              
  return (
    <>
    <div className="container mt-3">
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header fs-3 text-center">
                        All Product List
                        {msg && <p className='fs-4 text-center text-success'>{msg}</p>}
                    </div>
                    <div className="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">Sl No</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Discription</th>
                            <th scope="col">Price</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productList.map((product,index) => (
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{product.productName}</td>
                                        <td>{product.discription}</td>
                                        <td>{product.price}</td>
                                        <td>{product.status}</td>
                                        <td>
                                            <Link to={`updateProduct/`+product.id} className='btn btn-sm btn-primary ms-1' >Update</Link>
                                            <button onClick={()=>deleteProduct(product.id)} className='btn btn-sm btn-danger ms-1' >Delete</button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home
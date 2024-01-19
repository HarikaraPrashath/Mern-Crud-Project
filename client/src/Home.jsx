import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import{Link} from 'react-router-dom'
import axios from 'axios'

function Home() {
    const[products,setProducts] = useState([])


    useEffect(() => {
        axios.get('http://localhost:3001/readProduct')
            .then(result => setProducts(result.data))
            .catch(err => console.log(err));
    }, []);

    
    const handleDelete = (id)=>
    {
      axios.delete('http://localhost:3001/deleteProduct/'+id)
      .then(res=>{console.log(res)
          window.location.reload()
      } )
      .catch(err=>console.log(err))
    }

    
  return (
    <div className='flex justify-center items-center'> 
        <div className='w-3/4 bg-white rounded p-4'>
            <Link to="/create" className="bg-yellow-500 text-white py-2 px-4 rounded mb-4 inline-block hover:bg-yellow-900">Add Product</Link>
            <table className='w-full border'>
                <thead>
                    <tr className='bg-gray-200'>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* get all data from db */}
                    {
                        products.map((product)=>{
                            return <tr>
                                <td className='border p-2'>{product.name}</td>
                                <td className='border p-2'>{product.brand}</td>
                                <td className='border p-2'>{product.price}</td>
                                <td className='border p-2 flex items-center justify-center'>
                                    {/* link  will be help to change update page */}
                                    <Link to={`/update/${product._id}`} className='bg-green-500 text-white px-2 py-1 rounded inline-block mr-2 hover:bg-green-900'>Update</Link>
                                    <button className='bg-red-500 text-white px-2 py-1 rounded inline-block ml-6 hover:bg-red-900' onClick={(e)=>handleDelete(product._id)}>Delete</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>

        </div>
    </div>
  )
}

export default Home
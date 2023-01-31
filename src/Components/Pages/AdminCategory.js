import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllCategories } from '../../api/categoryAPI'
import Admin from '../Layout/Admin'
import Navbar from '../Layout/Navbar'

const AdminCategory = () => {

    const [ categories, setCategories ] = useState([])

    useEffect(()=>{
        getAllCategories()
            .then(data=>{
                if(data.error){
                    console.log(data.error)
                }
                else{
                    setCategories(data)
                }
            }
        )
    },[])
    
  return (
    <div>
    <Navbar />
    <div className='container-fluid'>
    <div className='row'>
        <div className='col-lg-3'>
            <Admin category />
        </div>

        <div className='col-lg-9 p-2'>
            <h1>Categories</h1>
            <div className='text-center'>
                <table className='table w-75  table-hover table-bordered align-middle px-5'>
                    <thead>
                        <tr className='fw-bold fs-5 bg-info-subtle'>
                            <th>S.no.</th>
                            <th>Category Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            categories && categories.map((category,i) =>{
                                return <tr key={category._id}>
                                    <td>{i+1}</td>
                                    <td>{category.category_name}</td>
                                    <td>
                                        <div className='btn-group'>
                                            <button className='btn btn-warning px-3'>
                                                <i className="bi bi-gear-fill"></i>&nbsp;&nbsp;Update
                                            </button> &nbsp;&nbsp;
                                            <button className='btn btn-danger px-3'>
                                                <i className="bi bi-trash3-fill"></i>&nbsp;&nbsp;Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
                <Link to='/admin/category/add'>Add New Category</Link>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default AdminCategory
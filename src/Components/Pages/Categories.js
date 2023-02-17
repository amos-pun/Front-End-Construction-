import React, { useState } from 'react'
import { getAllCategories } from '../../api/categoryAPI'

const Categories = () => {
    const [ categories, setCategories ] = useState("")

    useEffect(()=>{
        getAllCategories
    },[])
  return (
    <div></div>
  )
}

export default Categories
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DataDisplay from './DataDisplay'

const Datafetch = () => {
    const [posts, setPosts] = useState([])
    const [ limit, setLimit ] = useState(5)
    useEffect(()=>{
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response=>response.json().slice(0,limit))
        // .then(data=>setPosts(data))

        axios.get('https://fakestoreapi.com/products')
        .then(response=>response.data.slice(0,limit))
        .then(data=>setPosts(data))

},[limit])
    
  return (
    <div>
        {
            posts.map(p=>{
                return <DataDisplay post={p}/>
            })
        }

        { limit < 100 &&  
            <button className='btn btn-warning' onClick={()=>setLimit(limit+2)}>Load More</button>
        }
        {
            limit > 0 &&
            <button className='btn btn-warning' onClick={()=>setLimit(limit-5)}>Load Less</button>

        }
    </div>
  )
}

export default Datafetch
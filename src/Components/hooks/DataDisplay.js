import React from 'react'

const DataDisplay = ({post}) => {
  return (
    <div>
        <div className='m-5 p-5 border border-3 shadow-lg'>
            <h3>Post Id:{post.id}</h3>
            <h3>Title: {post.title}</h3>
            <h3>Price: {post.price}</h3>
        </div>
    </div>
  )
}

export default DataDisplay
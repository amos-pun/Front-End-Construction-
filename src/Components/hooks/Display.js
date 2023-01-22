import React from 'react'

const Display = ({name, address, post}) => {
  return (
    <div>
        <h1>Name: {name}</h1>
        <h2>Address: {address}</h2>
        <h2>Post: {post}</h2>
    </div>
  )
}

export default Display 
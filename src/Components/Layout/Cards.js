import React from 'react'
import { Link } from 'react-router-dom'

const Cards = () => {
  return (
    <div className='d-flex'>
        <div className="card" style={{width:"17rem"}}>
            <img src="./Image/Crane.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="#" className="btn btn-primary">Go somewhere</Link>
            </div>
        </div>
        <div className="card" style={{width:"17rem"}}>
            <img src="./Image/Lay-K.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="#" className="btn btn-primary">Go somewhere</Link>
            </div>
        </div>
        <div className="card" style={{width:"17rem"}}>
            <img src="./Image/Thali.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="#" className="btn btn-primary">Go somewhere</Link>
            </div>
        </div>
        <div className="card" style={{width:"17rem"}}>
            <img src="./Image/Thali-me.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="#" className="btn btn-primary">Go somewhere</Link>
            </div>
        </div>
        <div className="card" style={{width:"17rem"}}>
            <img src="./Image/Lay-bed.jpg"  alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to="#" className="btn btn-primary">Go somewhere</Link>
            </div>
        </div>
    </div>
  )
}

export default Cards
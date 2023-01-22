import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
        <div className='container-fluid p-2 backNavbar '>
            <div className='row d-flex'>

                <div className='col-sm-12 col-lg-4 text-center'>
                    <Link className="navbar-brand textNav" to="/"><span className='name'>Nirman</span> <span className='company'>Construction Company</span></Link>
                </div>

                <div className='col-sm-12 col-lg-4 d-flex text-center p-1'>
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </div>

                <div className='col-sm-12 col-lg-4 d-flex justify-content-evenly p-2'>
                    <Link ><i class="fa-solid fa-credit-card fa-xl icon"></i></Link>
                    <Link to={'/register'}><i class="fa-solid fa-user-plus fa-xl icon"></i>
                    </Link>
                    <Link><i class="fa-solid fa-address-book fa-xl icon"></i></Link>
                </div>
            </div>
        </div>
        <div>
            <div className="wrapper">
                <nav>
                    <ul>
                        <li><Link className='dwnNav' >Layouts</Link></li>
                        <li><Link to='/cart' className='dwnNav' >Products</Link></li>
                        <li><Link to='/faq' className='dwnNav'>FAQ</Link></li>
                        <li><Link to='/about' className='dwnNav'>About</Link></li>
                    </ul>
                </nav>       
            </div>
        </div>
       
    </div>
  )
}

export default Navbar
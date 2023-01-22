import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Counter from './Components/hooks/Counter'
import Data from './Components/hooks/Data'
import Datafetch from './Components/hooks/Datafetch'
import Main from './Components/hooks/reducer/Main'
import About from './Components/Pages/About'
import Cart from './Components/Pages/Cart'
import FAQ from './Components/Pages/FAQ'
import Home from './Components/Pages/Home'
import Register from './Components/Pages/Register'

const MyRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element= {<Home/>} />
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/faq' element={<FAQ/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/register' element={<Register/>}/>
            

            <Route path='/counter' element={<Counter/>}/>
            <Route path='/info' element={<Data/>}/>
            <Route path='/fetch' element={<Datafetch/>}/>
            <Route path='/main' element={<Main/>}/>

          
        </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes
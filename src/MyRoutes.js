import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Counter from './Components/hooks/Counter'
import Data from './Components/hooks/Data'
import Datafetch from './Components/hooks/Datafetch'
import Main from './Components/hooks/reducer/Main'
import About from './Components/Pages/About'
import AddNewCategory from './Components/Pages/AddCategory'
import AddProduct from './Components/Pages/addProduct'
import AdminCategory from './Components/Pages/AdminCategory'
import AdminPaage from './Components/Pages/AdminPaage'
import AdminProducts from './Components/Pages/AdminProduct'
import Cart from './Components/Pages/Cart'
import EmailConfirmation from './Components/Pages/EmailConfirmation'
import FAQ from './Components/Pages/FAQ'
import ForgetPassword from './Components/Pages/ForgetPassword'
import Home from './Components/Pages/Home'
import Login from './Components/Pages/Login'
import Register from './Components/Pages/Register'
import ResetPasword from './Components/Pages/ResetPassword'
import UpdateCategory from './Components/Pages/UpdateCategory'

const MyRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element= {<Home/>} />
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/faq' element={<FAQ/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>

            <Route path='/admin/dashboard' element={<AdminPaage/>}/>
            <Route path='/admin/category' element={<AdminCategory/>}/>
            <Route path='/admin/category/add' element={<AddNewCategory/>}/>
            <Route path='/admin/category/update/:id' element={<UpdateCategory/>}/>

            <Route path='/admin/product' element={<AdminProducts/>}/>
            <Route path='/admin/product/add' element={<AddProduct/>}/>

            <Route path='/verifyEmail/:token' element={<EmailConfirmation/>}/>

            
            <Route path='/resetpassword/:token' element={<ResetPasword/>}/>
            <Route path='/forgetpassword' element={<ForgetPassword/>}/>
            

            <Route path='/counter' element={<Counter/>}/>
            <Route path='/info' element={<Data/>}/>
            <Route path='/fetch' element={<Datafetch/>}/>
            <Route path='/main' element={<Main/>}/>

          
        </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes
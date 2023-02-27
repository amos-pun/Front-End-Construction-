import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./Components/hooks/Counter";
import Data from "./Components/hooks/Data";
import Datafetch from "./Components/hooks/Datafetch";
import Main from "./Components/hooks/reducer/Main";
import About from "./Components/Pages/About";
import AddNewCategory from "./Components/Pages/Admin/AddCategory";
import AddProduct from "./Components/Pages/Admin/addProduct";
import AdminOrders from "./Components/Pages/Admin/AdminOrders";
import AdminUsers from "./Components/Pages/Admin/AdminUsers";
import UpdateProduct from "./Components/Pages/Admin/UpdateProduct";
import AdminCategory from "./Components/Pages/Admin/AdminCategory";
import AdminPaage from "./Components/Pages/Admin/AdminPaage";
import AdminProducts from "./Components/Pages/Admin/AdminProduct";
import Cart from "./Components/Pages/Cart";
import EmailConfirmation from "./Components/Pages/EmailConfirmation";
import FAQ from "./Components/Pages/FAQ";
import ForgetPassword from "./Components/Pages/ForgetPassword";
import Home from "./Components/Pages/Home";
import Login from "./Components/Pages/Login";
import Register from "./Components/Pages/Register";
import ResetPasword from "./Components/Pages/ResetPassword";
import UpdateCategory from "./Components/Pages/UpdateCategory";
import AdminRoutes from "./SelectiveRoutes/AdminRoutes";
import PublicRoutes from "./SelectiveRoutes/PublicRoutes";
import Products from "./Components/Pages/Products/Products";
import ProductDetails from "./Components/Pages/Products/ProductDetails";

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<About />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<AdminRoutes />}>
          <Route path="/admin/dashboard" element={<AdminPaage />} />
          <Route path="/admin/category" element={<AdminCategory />} />
          <Route path="/admin/category/add" element={<AddNewCategory />} />
          <Route
            path="/admin/category/update/:id"
            element={<UpdateCategory />}
          />

          <Route path="/admin/product" element={<AdminProducts />} />
          <Route path="/admin/product/add" element={<AddProduct />} />
          <Route path="/admin/product/update/:id" element={<UpdateProduct />} />

          <Route path="/admin/users" element={<AdminUsers />} />

          <Route path="/admin/orders" element={<AdminOrders />} />
        </Route>

        <Route path="/" element={<PublicRoutes />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Route>

        <Route path="/products" element={<Products />} />
        <Route path="/verifyEmail/:token" element={<EmailConfirmation />} />
        <Route path="/resetpassword/:token" element={<ResetPasword />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />

        <Route path="/counter" element={<Counter />} />
        <Route path="/info" element={<Data />} />
        <Route path="/fetch" element={<Datafetch />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoutes;

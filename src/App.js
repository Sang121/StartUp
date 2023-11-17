
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Login from './pages/login/login';

import YourLesson from './pages/YourLesson/YourLesson';
import Home from './pages/home/home';

import Register from './pages/register/register';
import Lesson from './pages/lesson/lesson';
import Products from './pages/Products/Products';
import ProductDetails from './pages/productDetails/ProductDetails';
import Cart from './pages/cart/cart';
import LessonDetail from './pages/LessonDetail/LessonDetail';
import YourLessonDetail from './pages/YourLessonDetail/YourLessonDetail';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/lesson" element={<Lesson />} />
          <Route path="/products" element={<Products />} />
          <Route path="/setting" element={<Home />} />
          <Route path="/yourLesson" element={<YourLesson />} />
          <Route path="/LessonDetail" element={<LessonDetail />} />
          <Route path="/YourLessonDetail" element={<YourLessonDetail />} />
          <Route path="/productDetail" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

      </Router>




    </div>
  );
}

export default App;
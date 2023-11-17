import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import bellSvg from '../assets/bell-solid.svg'
import avt from '../assets/avtDemo.jpg'
import logo from '../assets/logo.png';
import axios from 'axios';
import './header.css';
import Popup from './Popup';
function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const [popup1, setPopup1] = useState(false);
  const [popup2, setPopup2] = useState(false);
  const navigate = useNavigate();

  let isLoggedIn = localStorage.getItem('isLoggedIn')
  const handleSubmit = event => {
    event.preventDefault();
    if (searchTerm) {
      // Chuyển hướng đến trang Search và truyền giá trị searchTerm trong URL
      navigate(`/search/${searchTerm}`);
    }
  };

  const Logout = () => {
    if (isLoggedIn) {

      localStorage.removeItem('isLoggedIn', isLoggedIn);
      localStorage.removeItem('userlogin');
      setPopup1(true);
      setTimeout(function () {

        window.location.href = "/";
      }, 1000)

    }
    else {
      setPopup2(true);
      setTimeout(function () {

        window.location.href = "/";
      }, 1000)
    }


  }
  const editProfile = () => {
    if (isLoggedIn) {
      window.location.href = "/editprofile";
    }
    else {
      setPopup2(true);
      setTimeout(function () {

        window.location.href = "/";
      }, 1000)
    }
  }
  const account = () => {
    if (isLoggedIn) {
      window.location.href = "/editprofile";
    }
    else {

      window.location.href = "/login";
    }
  }
  return (
    <div className="navs">
      <span class=" navbar-toggler-icon btn-header sidebar_btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">☰</span>
      <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Account</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body  ">
          <button href="/editProfile" onClick={editProfile} class="btn item"> Edit account infomation</button>
          <button onClick={Logout} className=' btn btn_logout item'> Log out</button>
        </div>
      </div>
      <div className="logoo col-12 col-sm-2">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="nav col-12 col-sm-10 row">
        <div className="topnav d-flex justify-content-around">
          <a href='/' class="home-btn  btn-header "><i class="fa fa-home" > </i> Home</a>
          <form className="d-flex search" onSubmit={handleSubmit}>
            <div class="  search-group  abc bg-light rounded rounded-pill ">
              <div class="input-group  ">
                <input type="search"
                  value={searchTerm}
                  onChange={event => setSearchTerm(event.target.value)} placeholder=""
                  class="seach-btn rounded rounded-pill border-0 bg-light" />
                <div class="input-group-append">
                  <button id="button-addon1" type="submit" class="btn btn-link text-primary"><i class="fa fa-search"></i></button>
                </div>
              </div>
            </div>
          </form>
          <div className=" login-cart">
            <a href='/editProfile' onClick={account} class="  btn-header login-btn"><i class="fa fa-sign-in "></i>Tài khoản</a>
            <a href='/cart' class=" btn-header cart-btn"><i class="fa-solid fa-cart-shopping"></i> Giỏ hàng</a>
          </div>
        </div>
        <div className="d-flex titles justify-content-between  column">
          <div className="cardViewContainer">
            <a className="item"> Thang dây</a>
            <a className="item"> Bình cứu hỏa</a>
            <a className="item"> Dụng cụ bảo hộ</a>
            <a className="item"> Mặt nạ</a>
            <a className="item"> Áo phao</a>
          </div>
        </div>
      </div>
      <Popup trigger={popup2} setTrigger={setPopup2} >
        <p> <i class="fa fa-exclamation"> </i> You must login fist</p>
      </Popup>
      <Popup trigger={popup1} setTrigger={setPopup1} >
        <p><i class="fa check fa-check"></i>Logout success</p>
      </Popup>
    </div>
  );
}
export default Header;
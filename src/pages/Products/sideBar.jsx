import React from 'react'
import logo from '../../assets/logo.png'


import '../../components/sidebar.css'
function Sidebar() {
  return (
    <div className="container">
      
      <ul className='list' >
        <a href='/'>
          <li>
            <i class="fa-solid fa-house icon "></i> Trang chủ

          </li>
        </a><hr />
        <a href='/lesson'>
          <li>
            <i class="fa-solid fa-book icon"></i> Khóa học

          </li>
        </a><hr />
        <a href='/products'>
          <li>
            <i class="fa-solid fa-cart-shopping icon "></i>   Các dụng cụ thiết yếu

          </li>
        </a><hr />

        <a href='/setting'>
          <li>
            <i class="fa-solid fa-gear icon"></i> Cài đặt

          </li>
        </a>

      </ul>

    </div>
  )
}

export default Sidebar
import React from 'react'
import logo from '../assets/logo.png'
import homeSvg from '../assets/house-solid.svg'
import LessonSvg from '../assets/book-solid.svg'
import settingSvg from '../assets/gear-solid.svg'
import mentorSvg from '../assets/people-group-solid.svg'

import './sidebar.css'
function Sidebar() {
  return (
    <div className="container">
      <div className="logo">
        <a href="/">
          {" "}
          <img src={logo} className="logo" />
        </a>
      </div>
      <ul className='list' >
        <a href='/'>
          <li>
            <img className='icon' src={homeSvg} /> Trang chủ

          </li>
        </a><hr />
        <a href='/lesson'>
          <li>
            <img className='icon' src={LessonSvg} /> Khóa học

          </li>
        </a><hr />
        <a href='/mentor'>
          <li>
            <img className='icon' src={mentorSvg} /> Người hướng dẫn

          </li>
        </a><hr />
        
        <a href='/setting'>
          <li>
            <img className='icon' src={settingSvg} /> Cài đặt

          </li>
        </a>

      </ul>

    </div>
  )
}

export default Sidebar
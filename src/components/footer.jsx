import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom'
function Footer
  () {
  return (
    <div className='footer'>

      <div className='line2'>
        <Link to="https://www.facebook.com/Libra245" className='home-btn'>
          <button type="submit" class=" btn  "><i class="fa fa-facebook" > </i>Facebook</button>
        </Link>
        <Link to="https://www.instagram.com/imsn.02/" className='home-btn'>
          <button type="submit" class=" btn "><i class="fa fa-instagram" > </i>Instagram</button>
        </Link>
      </div>
      <div className='line3'>
        <ul>
          <li>Địa chỉ:Yên Nghĩa, Thành phố Hà Nội, Việt Nam. Tổng đài hỗ trợ: 0345123230 - Email: foremergency@gmail.com </li>
          <li>Chịu Trách Nhiệm Quản Lý Nội Dung: HFP2 - Điện thoại liên hệ: 0352797320 </li>
          <li> </li>
          <li>© 2023 - Bản quyền thuộc về Công ty TNHH HFP2 </li>
        </ul></div>
    </div>
  )
}

export default Footer


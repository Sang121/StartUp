import React, { useState } from 'react'
import './header.css'
import bellSvg from '../assets/bell-solid.svg'
import avt from '../assets/avtDemo.jpg'
import Popup from './Popup'
import settingSvg from '../assets/gear-solid.svg'

function Header() {
    const userLoggedIn = JSON.parse(localStorage.getItem("userlogin"));
    const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"))
    const [popup1, setPopup1] = useState(false);

    const Logout = () => {
        if (isLoggedIn) {

            localStorage.removeItem('isLoggedIn', isLoggedIn);
            setPopup1(true);

            setTimeout(() => {
                window.location.href = "/login";
            }, 1000)

            localStorage.removeItem('userlogin');

        }



    }
    return (
        <div>
            <div className='topHeader'>
                <h2> Xin chào {userLoggedIn && userLoggedIn.fullName} </h2>
                <div className='rightHeader'>
                    <div class="  search-group  abc bg-light rounded rounded-pill ">
                        <div class="input-group  ">
                            <input type="search"

                                placeholder="Nhập thứ bạn cần tìm"
                                aria-describedby="button-addon1" class="seach-btn  rounded-pill border-0 bg-light" />
                            <div class="input-group-append">
                                <button id="button-addon1" type="submit" class="btn btn-link text-primary"><i class="fa fa-search"></i></button>
                            </div>
                        </div>
                    </div>
                    <a href='#'>  <img className='icon' src={bellSvg} /></a>
                    <a href='#'> <img className='avt' src={avt} /></a>
                    <button onClick={Logout} className='  btn_logout '> Log out </button>
                </div>
            </div>
            <div><p> Hãy học điều gì đó mới mẻ trong hôm nay nào!</p> </div>
            <Popup trigger={popup1} setTrigger={setPopup1} >
                <p><i class="fa check fa-check"></i>Logout success</p>
            </Popup>
        </div>
    )
}

export default Header
import React, { useState } from 'react'
import './navBar.css'
import bellSvg from '../assets/bell-solid.svg'
import avt from '../assets/avtDemo.jpg'
import Popup from './Popup'
import settingSvg from '../assets/gear-solid.svg'

function Navbar() {
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
            </div>
            <div><p> Hãy học điều gì đó mới mẻ trong hôm nay nào!</p> </div>
            <Popup trigger={popup1} setTrigger={setPopup1} >
                <p><i class="fa check fa-check"></i>Logout success</p>
            </Popup>
        </div>
    )
}

export default Navbar
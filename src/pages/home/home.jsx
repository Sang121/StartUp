import React from 'react'
import Sidebar from '../../components/sidebar'
import './home.css'
import Navbar from '../../components/navBar'
import Footer from '../../components/footer'
import charDemo from '../../assets/charDemo.png'
import Header from '../../components/header'

function Home() {
    const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"))
    // if (isLoggedIn == null) {
    //     window.location.href = './login';
    // }
    // else
    return (

        <div className='container-fluid'>
            <Header />
            <div className='main-content'>

                <div className='sidebar'>
                    <Sidebar />

                </div>
                <div className='main'>
                    <div>
                        <Navbar />
                    </div><hr />



                    Tính năng đang phát triển


                    
                </div>

            </div>
            <Footer />
        </div>

    )
}

export default Home
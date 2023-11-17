import React, { useEffect, useState } from 'react'
import Footer from '../../components/footer'
import SideBar from '../../components/sidebar'
import './products.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import CuuHoa from '../../assets/cuuhoa.jpg'
import Thang from '../../assets/thang.jpg'
import Matna from '../../assets/matna.jpg'
import Baoho from '../../assets/baoho.jpg'
import Popup from '../../components/Popup'
import Header from '../../components/Header'

import NavBar from '../../components/navBar'
function Products() {
    const [addSuccess, setAddSuccess] = useState(false);
    const handleAddToCart = () => {
        setAddSuccess(true)

    }
    return (
        <div className='container-fluid'>
            <Header /><bbr/>

            <div className=' products'>
                <div className='sidebar'>
                    <SideBar />
                </div>
                <div className='mainContent'>
                    <div className='singleItem'>
                        <a href='./productDetail'> <img src={CuuHoa} className='thumbnailProduct' /></a>
                        <h3 className='nameProduct'>Bình cứu hỏa</h3>
                        <p className='price'>200.000đ</p>
                        <div >
                            <button onClick={handleAddToCart} class=' cus-btn add-btn'><span class='add'>Add to Cart</span></button>

                        </div>
                    </div>
                    <div className='singleItem'>
                        <a href='./productDetail'> <img src={Thang} className='thumbnailProduct' /></a>
                        <h3 className='nameProduct'>Thang dây</h3>
                        <p className='price'>432.000-657.00đ</p>
                        <div >
                            <button onClick={handleAddToCart} class=' cus-btn add-btn'><span class='add'>Add to Cart</span></button>

                        </div>
                    </div>
                    <div className='singleItem'>
                        <a href='./productDetail'> <img src={Matna} className='thumbnailProduct' /></a>
                        <h3 className='nameProduct'>Mặt nạ</h3>
                        <p className='price'>60.000đ</p>
                        <div >
                            <button onClick={handleAddToCart} class=' cus-btn add-btn'><span class='add'>Add to Cart</span></button>

                        </div>
                    </div>
                    <div className='singleItem'>
                        <a href='./productDetail'> <img src={Baoho} className='thumbnailProduct' /></a>
                        <h3 className='nameProduct'>Đồ bảo hộ</h3>
                        <p className='price'>219.000đ</p>
                        <div >
                            <button onClick={handleAddToCart} class=' cus-btn add-btn'><span class='add'>Add to Cart</span></button>

                        </div>
                    </div>

                </div>

            </div>
            <Footer />
            <Popup trigger={addSuccess} setTrigger={setAddSuccess}>
                <p><i class="fa check fa-check"></i> Add to cart success</p>
            </Popup>
        </div>
    )
}

export default Products
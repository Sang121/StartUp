import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import './productDetail.css';
import Popup from '../../components/Popup'
import CuuHoa from '../../assets/cuuhoa.jpg'
import Header from '../../pages/Products/headerPrd'
import CuuHoa1 from '../../assets/cuuhoa1.jpg'
import CuuHoa2 from '../../assets/cuuhoa2.jpg'
import CuuHoa3 from '../../assets/cuuhoa3.jpg'
import CuuHoa4 from '../../assets/cuuhoa4.jpg'
import Footer from '../../components/footer';
const findItemIndex = (cart, id) => {
    return cart.findIndex((item) => item.id === id);
}

function ProductDetails() {
    const base_url = 'https://dummyjson.com'
    const [product, setProduct] = useState([])
    const [quantity, setQuantity] = useState(1);
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const [addSuccess, setAddSuccess] = useState(false);
    let { id } = useParams();

    useEffect(() => {
        if (id) {
            try {
                axios.get(`${base_url}/products/${id}`)
                    .then(response => {
                        setProduct(response.data);

                    })
            }
            catch (error) {
                console.log(error);
            }
        }

    }, [id]);
    const [selectedImage, setSelectedImage] = useState(CuuHoa3);


    const handleAddToCart = () => {
        const item = {
            id: product.id, price: product.price, discountPercentage: product.discountPercentage, new_price: ((100 - product.discountPercentage) * product.price) / 100,
            thumbnail: product.thumbnail, title: product.title, quantity: quantity
        };
        const itemIndex = findItemIndex(cartItems, product.id);

        if (itemIndex !== -1) {
            // If the item already exists in the cart, increase its quantity by 1
            const updatedCart = [...cartItems];
            updatedCart[itemIndex].quantity += quantity;
            setCartItems(updatedCart);
        } else {
            // If the cart does not exist, create a new array and add the new item to it
            const updatedCart = [...cartItems, item];
            setCartItems(updatedCart);
        }

        // Reset the quantity to 1 after adding the item to the cart
        setQuantity(1);
        setAddSuccess(true)
    }

    const handleQuantityChange = (e) => {
        const value = Number(e.target.value);
        if (!isNaN(value)) {
            setQuantity(value);
        }
    };
    if (quantity < 0) {

        alert(' Không thể nhập số âm')
        setQuantity(1)
    }
    localStorage.setItem('cart', JSON.stringify(cartItems));
    function handleImageClick(image) {
        setSelectedImage(image);
    }
    return (
        <div>
            <Header />
            <div className="details-container row">

                <div className=" img-details col-12 col-md-6  ">


                    <ul className="nav nav-tabs nav-justified">
                        <li className="img-cover">
                            <img src={selectedImage} alt={product.title} className="col-12" />
                        </li>
                        <li>
                            <ul className="small-img">
                                <li onClick={() => handleImageClick(CuuHoa1)}> <img src={CuuHoa1} className='itemn' /> </li>
                                <li onClick={() => handleImageClick(CuuHoa2)}> <img src={CuuHoa2} className='itemn' /> </li>
                                <li onClick={() => handleImageClick(CuuHoa3)}> <img src={CuuHoa3} className='itemn' /> </li>
                                <li onClick={() => handleImageClick(CuuHoa4)}> <img src={CuuHoa4} className='itemn' /> </li>
                            </ul>
                        </li>

                    </ul>
                </div>


                <div className=" details col-12  col-md-6 ">

                    <h1 className="red">Bình cứu hỏa</h1>

                    <div className='price-details d-flex column'>
                        <h4> Price:</h4>
                        <h4 className='n-price  '>200.000đ </h4>


                    </div>
                    <p className='stock'> Remaining: 454 sản phẩm </p>
                    <p className='descript' >Cụm van vòi trên bình chữa cháy có chốt kẹp chì, cò bóp, vòi phun làm từ cao su, bình được trang bị thêm một đồng hồ đo áp suất tại cụm van vòi này để biết được tình trang khí nén trong bình.

                        Thân bình thường được đúc nguyên khối, với khả năng chịu được lực và áp suất cao. Bên trong chứa bột chữa cháy và khí trơ như CO2 và Nito. Vỏ bình chữa cháy bột khô thường được sơn màu đỏ, dán lên đó hướng dẫn sử dụng và thông số kỹ thuật.

                        Hướng dẫn sử dụng bình chữa cháy bột khô BC MFZL4 ABC

                        Đối với loại bình phòng cháy chữa cháy bột khô loại xách tay MFZ4 4kg này bạn hoàn toàn có thể sử dụng một cách dễ dàng qua các bước sau:

                        Phát hiện đám cháy nhanh chóng mang bình tiếp cận đám cháy.

                        Tiến hành xóc bình để bột trong bình được tơi ra trước khi sử dụng và đạt hiệu quả chữa cháy cao nhất.

                        Bình xách tay có hiệu quả và được khuyến cáo nên cách đám cháy khoảng 1,5 – 2m.

                        Rút chốt kẹp chì trên bình và phun cho đến khi hết bình hoặc chỉ dừng lại khi đám cháy được kiểm soát hoàn toàn.
                    </p>

                    <div className='setQuantity ' >
                        <span onClick={() => setQuantity(quantity - 1)}> - </span>

                        <input type="text" className='quantity' name="quantity" onChange={handleQuantityChange} value={quantity} />
                        <span onClick={() => setQuantity(quantity + 1)}> + </span>
                    </div>
                    <div >
                        <button onClick={handleAddToCart} class=' cus-btn add-btn'><span class='add'>Add to Cart</span></button>

                    </div>


                </div>

            </div>
            <Popup trigger={addSuccess} setTrigger={setAddSuccess}>
                <p><i class="fa check fa-check"></i> Add to cart success</p>
            </Popup>

            <div className="htUse">
                <h3> Cách sử dụng bình cứu hỏa:</h3>
                <p>
                    - Đối với loại xách tay:<br />
                         Khi có cháy xảy ra, xách bình tới gần địa điểm cháy. Lắc xóc bình từ 3-4 lần để bột tơi, giật chốt hãm kẹp chì, chọn đầu hướng gió hướng loa phun vào gốc lửa. Giữ bình ở khoảng cách 1,5m tuỳ loại bình, bóp van bình để bột chữa cháy phun ra, khi khí yếu thì tiến lại gần và đưa loa phun qua lại để dập tắt hoàn toàn đám cháy.</p><br />
                <p>
                    - Đối với bình xe đẩy:<br />

                    + Đẩy xe đến chỗ có hỏa hoạn, kéo vòi rulo dẫn bột ra, hướng lăng phun bột vào gốc lửa.<br />

                    + Giật chốt an toàn (kẹp chì), kéo van chính trên miệng bình vuông góc với mặt đất.<br />

                    + Cầm chặt lăng phun chọn thuận chiều gió và bóp cò, bột sẽ được phun ra.<br />

                    Khi mở van (tuỳ từng loại bình có cấu tạo van khoá khác nhau thì cách mở khác nhau), bột khô trong bình được phun ra ngoài nhờ lực đẩy của khí nén (nén trực tiếp với bột hoặc trong chai riêng) qua hệ thống ống dẫn. Khi phun vào đám cháy bột có tác dụng kìm hãm phản ứng cháy và cách ly chất cháy với ôxy không khí, mặt khác ngăn cản hơi khí cháy tiến vào vùng cháy dẫn đến đám cháy bị dập tắt.
                </p>
            </div>
<Footer/>
        </div>
    )
}

export default ProductDetails;
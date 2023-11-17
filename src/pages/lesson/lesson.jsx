import React from 'react'
import './lesson.css'
import Sidebar from '../../components/sidebar'
import Navbar from '../../components/navBar'
import Footer from '../../components/footer'
import Avt from '../../assets/avtDemo.jpg'
import Fire from '../../assets/FireThumbnail.jpg'
import Swim from '../../assets/swimThumbnail.png'
import Life from '../../assets/lifeThumbnail.jpg'
import Lan from '../../assets/LanThumbnail.jpg'
import Run from '../../assets/runThumbnail.jpg'
import Thoathiem from '../../assets/thoathiemThumbnail.jpg'
import Traffic from '../../assets/trafficThumbnail.jpg'
import Socuu from '../../assets/socuuThumbnail.jpg'
import Header from '../../components/header'
import HoHap from '../../assets/hohapThumbnail.png'

function Lesson() {
  return (
    <div className='container-fluid'>
      <Header />
      <div className='lesson'>
        <div className='sidebar'>
          <Sidebar />
        </div>
        <div className='main mainn'>
          <div className="header">
            <Navbar /></div><hr />
          <h2> Khóa học các kĩ năng</h2>
          <div className='lessons'>

            <div className='swim itemOfLessson'>
              <h3> Kĩ năng chữa cháy</h3><hr />
              <img className='thumbnail' src={Fire} />
              <div className='author'>
                <img className=' avtAuthor' src={Avt} />
                <p className='nameAuthor'>Nguyễn Hàm Sáng </p>
              </div>
              <div className='student'>
                <i class="fa-solid fa-person itemm"> </i><p>500 Student</p>

                <i class="fa-solid fa-book itemm"> </i><p>5 module</p>
                <i class="fa-regular fa-clock itemm"></i><p>2h30p</p>

              </div>

            </div>

            <div className='swim itemOfLessson'>
              <h3> Kĩ năng bơi lội</h3><hr />
              <img className='thumbnail' src={Swim} />
              <div className='author'>
                <img className=' avtAuthor' src={Avt} />
                <p className='nameAuthor'>Trương Thị Thúy Hiền</p>
              </div>
              <div className='student'>
                <i class="fa-solid fa-person itemm"> </i><p>380 Student</p>

                <i class="fa-solid fa-book itemm" > </i><p>3 module</p>
                <i class="fa-regular fa-clock itemm"></i><p>1h50p</p>

              </div>

            </div>

            <div className='swim itemOfLessson'>
              <h3> Kĩ năng sinh tồn</h3><hr />
              <img className='thumbnail' src={Life} />
              <div className='author'>
                <img className=' avtAuthor' src={Avt} />
                <p className='nameAuthor'>Phan Ngọc Minh</p>
              </div>
              <div className='student'>
                <i class="fa-solid fa-person itemm"> </i><p>450 Student</p>

                <i class="fa-solid fa-book itemm"> </i><p>7 module</p>
                <i class="fa-regular fa-clock itemm"></i><p>3h31p</p>

              </div>

            </div>
            <div className='swim itemOfLessson'>
              <h3> Kĩ năng Lặn</h3><hr />
              <img className='thumbnail' src={Lan} />
              <div className='author'>
                <img className=' avtAuthor' src={Avt} />
                <p className='nameAuthor'>Ninh Thi Quỳnh Như</p>
              </div>
              <div className='student'>
                <i class="fa-solid fa-person itemm"> </i><p>550 Student</p>

                <i class="fa-solid fa-book itemm"> </i><p>7 module</p>
                <i class="fa-regular fa-clock itemm"></i><p>4h00p</p>

              </div>

            </div>
            <div className='swim itemOfLessson'>
              <h3> Kĩ năng thoát hiểm</h3><hr />
              <img className='thumbnail' src={Thoathiem} />
              <div className='author'>
                <img className=' avtAuthor' src={Avt} />
                <p className='nameAuthor'>Dương Thị Ngân</p>
              </div>
              <div className='student'>
                <i class="fa-solid fa-person itemm"> </i><p>650 Student</p>

                <i class="fa-solid fa-book itemm"> </i><p> 9 module</p>
                <i class="fa-regular fa-clock itemm"></i><p>4h30p</p>

              </div>

            </div>
            <div className='swim itemOfLessson'>
              <h3> Kĩ năng chạy</h3><hr />
              <img className='thumbnail' src={Run} />
              <div className='author'>
                <img className=' avtAuthor' src={Avt} />
                <p className='nameAuthor'>Ninh Thi Quỳnh Như</p>
              </div>
              <div className='student'>
                <i class="fa-solid fa-person itemm"> </i><p>360 Student</p>

                <i class="fa-solid fa-book itemm"> </i><p>5 module</p>
                <i class="fa-regular fa-clock itemm"></i><p>2h40p</p>

              </div>

            </div>
            <div className='swim itemOfLessson'>
              <h3> Tham gia giao thông</h3><hr />
              <img className='thumbnail' src={Traffic} />
              <div className='author'>
                <img className=' avtAuthor' src={Avt} />
                <p className='nameAuthor'>Trương Thị Thúy Hiền</p>
              </div>
              <div className='student'>
                <i class="fa-solid fa-person itemm"> </i><p>260 Student</p>

                <i class="fa-solid fa-book itemm"> </i><p>8 module</p>
                <i class="fa-regular fa-clock itemm"></i><p>4h20p</p>

              </div>

            </div>
            <div className='swim itemOfLessson'>
              <h3> Sơ cứu khi bị thương</h3><hr />
              <img className='thumbnail' src={Socuu} />
              <div className='author'>
                <img className=' avtAuthor' src={Avt} />
                <p className='nameAuthor'>Dương Thị Ngân</p>
              </div>
              <div className='student'>
                <i class="fa-solid fa-person itemm"> </i><p>350 Student</p>

                <i class="fa-solid fa-book itemm"> </i><p>7 module</p>
                <i class="fa-regular fa-clock itemm"></i><p>3h00p</p>

              </div>

            </div>
            <div className='swim itemOfLessson'>
              <h3> Kĩ năng hô hấp nhân tạo</h3><hr />
              <img className='thumbnail' src={HoHap} />
              <div className='author'>
                <img className=' avtAuthor' src={Avt} />
                <p className='nameAuthor'>Phan Ngọc Minh</p>
              </div>
              <div className='student'>
                <i class="fa-solid fa-person itemm"> </i><p>770 Student</p>

                <i class="fa-solid fa-book itemm"> </i><p>3 module</p>
                <i class="fa-regular fa-clock itemm"></i><p>1h31p</p>

              </div>

            </div>



          </div>
        </div><hr />


      </div >
      <Footer />
    </div >
  )
}

export default Lesson
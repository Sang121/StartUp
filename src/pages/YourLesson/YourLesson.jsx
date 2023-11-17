import React from 'react'
import Sidebar from '../../components/sidebar'
import './yourLesson.css'
import Navbar from '../../components/navBar'
import Footer from '../../components/footer'
// import Header from '../../components/Header'
import charDemo from '../../assets/charDemo.png'
import Avt from '../../assets/avtDemo.jpg'
import Fire from '../../assets/FireThumbnail.jpg'
import Swim from '../../assets/swimThumbnail.png'
import Life from '../../assets/lifeThumbnail.jpg'
function YourLesson() {
    const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"))
    // if (isLoggedIn == null) {
    //     window.location.href = './login';
    // }
    // else
    return (

        <div className='container-fluid'>
           
            <div className='main-content'>

                <div className='sidebar'>
                    <Sidebar />

                </div>
                <div className='main'>
                    <div>
                        <Navbar />
                    </div><hr />
                    <div className='content'>
                        <h2  > Thống kê thời gian học tập</h2>
                        <div className='char'>

                            <p >Biểu đồ thể hiện thời gian bạn học ở các ngày trong tuần</p>
                            <div className='abcc'>
                                <div className='learn'> 85%</div>

                                <img className='chardemo' src={charDemo} />
                            </div>
                        </div>
                        <div className='lessons'>
                            <div className='swim itemOfLessson'>
                                <h3> Kĩ năng chữa cháy</h3><hr/>
                                <a href='./YourLessonDetail'>  <img className='thumbnail' src={Fire} /></a>
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
                        </div>
                    </div>

                </div>

            </div>
            <Footer />
        </div>

    )
}

export default YourLesson
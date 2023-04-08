import React from 'react'
import './Home.css';
import noise from './images/noise.png';
import imgsanat from './images/imgsanat.png';
import brand from './images/brand.png';
import category from './images/category.png';
import shop from './images/shop.png';

const Home =() => {

    function handleClick() {
        alert('You clicked me!');
      }

    return ( 
        <>
        <div className='main-container'>
            <div className='top-section'>
            <div className='slider-top-section' style={{backgroundImage : `url(${imgsanat})`}}>
                    

                    </div>
    
                <div className='main-top-section' style={{backgroundImage : `url(${noise})`}}>
                        <div className='title'><h2>ابــــــــزار صنعـــــــت ساختـــــمان</h2></div>
                        <div className='text-container'><p className='text'>
                    ابزار صنعت فضایی برای آشنایی با بهترین برندهای صنعتی است. دسته بندی انواع برندها، 
معرفی کسب و کارها و فروشگاه های کوچک و فروشگاه محصولات صنعتی از جمله خدماتی است که
 با نصب اپلیکیشن ابزار صنعت همیشه در اختیار شما می باشد.<br/><br/> به جمع خانواده ابزار صنعت بپیوندید :)
                            </p></div>
                        <div className='btn-container'>
                        <button className='btn' onClick={handleClick}>دانلود اپلیکیشن</button>
                        </div>

                </div>
                
                
            </div>
            <div className='bottom-section'>
                <div className='HomeCarts' style={{backgroundImage : `url(${shop})`}}>
                    <div className='bottom-text'>
                        فروشگاه
                    </div>

                </div>
                <div className='HomeCarts' style={{backgroundImage : `url(${category})`}}>
                    <div className='bottom-text'>
                        دسته‌بندی
                    </div>
                </div>
                <div className='HomeCarts' style={{backgroundImage : `url(${brand})`}}>
                    <div className='bottom-text'>
                        برندها
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}

export default Home;
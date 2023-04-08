import React from 'react'
import './Home.css';
import noise from './images/noise.png';
import imgsanat from './images/imgsanat.png';
import brand from './images/brand.png';
import category from './images/category.png';
import shop from './images/shop.png';
import { useNavigate } from "react-router-dom";


const Home =() => {
    const navigate = useNavigate();

    function handleClick2(link) {
        
        navigate(link);
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
                        <button className='btn' onClick={()=>handleClick2('/apps')}>دانلود اپلیکیشن</button>
                        </div>

                </div>
                
                
            </div>
            <div className='bottom-section'>
                <div 
                onClick={()=>handleClick2('/shop')}
                className='HomeCarts'
                 style={{backgroundImage : `url(${shop})`}}>
                    <div className='bottom-text' >
                        فروشگاه
                    </div>
                    
                </div>
                <div
                onClick={()=>handleClick2('/category')}
                className='HomeCarts' style={{backgroundImage : `url(${category})`}}>
                    <div className='bottom-text'>
                        دسته‌بندی
                    </div>
                </div>
                <div 
                onClick={()=>handleClick2('/brands')}
                className='HomeCarts' style={{backgroundImage : `url(${brand})`}}>
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
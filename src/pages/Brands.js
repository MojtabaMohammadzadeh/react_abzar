
import React from 'react'
import './Category.css';
import noise from './images/noise.png';
import team from './images/team.png';

function Brands() {
    return ( 
        <>
        <div className="main-contain" >

            <div className='main-section' style={{backgroundImage : `url(${noise})`}}>
                <div className='img-section' style={{backgroundImage : `url(${team})`}}></div>
                <h5>برندها در حال به روز رسانی می باشد</h5>
            </div>

        </div>
        </>
     );
}

export default Brands;
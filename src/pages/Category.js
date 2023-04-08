import React from 'react'
import './Category.css';
import noise from './images/noise.png';
import team from './images/team.png';

function Category() {
    return ( 
        <>
        <div className="main-contain" >

            <div className='main-section' style={{backgroundImage : `url(${noise})`}}>
                <div className='img-section' style={{backgroundImage : `url(${team})`}}></div>
                <h5>دسته بندی در حال بروز رسانی می باشد</h5>
            </div>

        </div>
        </>
     );
}

export default Category;
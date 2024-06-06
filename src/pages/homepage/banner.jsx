import React from 'react'
import Bannerimg from '../../assets/bannerimg.png'
import infoimg from '../../assets/infoimg.png'

const Banner = () => {
    return (
        <div className='banner'>
            <div className="b-inner container">
                <img src={Bannerimg} alt="" />
                <div className="b-content">
                    <button className="btn-tech">Technology</button>
                    <h2>The Impact of Technology on <br /> the Workplace: How <br /> Technology is Changing</h2>
                    <div className="info">
                        <img src={infoimg} alt="" />
                        <small className='p1'>Jason Francisco</small>
                        <small className='p2'>August 20, 2022</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
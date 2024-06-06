import React from 'react'
import Oneimg from '../../../assets/c1.png'
import Autone from '../../../assets/authoroneimg.png'
import Twoimg from '../../../assets/c2.png'
import Auttwo from '../../../assets/infoimg.png'
import Threeimg from '../../../assets/c3.png'
import Autthree from '../../../assets/a3.png'
import C4 from '../../../assets/c4.png'
import A4 from '../../../assets/a4.png'
import C5 from '../../../assets/c5.png'
import A5 from '../../../assets/a5.png'
import C6 from '../../../assets/c6.png'
import A6 from '../../../assets/a6.png'
import C7 from '../../../assets/c7.png'
import A7 from '../../../assets/a7.png'
import C8 from '../../../assets/c8.png'
import A8 from '../../../assets/a8.png'
import C9 from '../../../assets/c9.png'
import A9 from '../../../assets/a9.png'

const Cards = () => {
    return (
        <div className='showcase'>
            <div className="c-inner container">
                <div className="adv">
                    <h4>Advertisement</h4>
                    <h2>You can place ads</h2>
                    <h3>750 X 100</h3>
                </div>
                <h2>Latest Posts</h2>
                <div className="cards">
                    <div className="card">
                        <img src={Oneimg} alt="" />
                        <div className="c-info-up">
                            <button className="btn-dark">Technology</button>
                            <h2>The Impact of Technology on the Workplace: How Technology is Changing</h2>
                        </div>
                        <div className="author">
                            <img src={Autone} alt="" />
                            <small className='p1'>Tracey Wilson</small>
                            <small className='p2'>August 20, 2022</small>
                        </div>
                    </div>
                    <div className="card">
                        <img src={Twoimg} alt="" />
                        <div className="c-info-up">
                            <button className="btn-dark">Technology</button>
                            <h2>The Impact of Technology on the Workplace: How Technology is Changing</h2>
                        </div>
                        <div className="author">
                            <img src={Auttwo} alt="" />
                            <small className='p1'>Tracey Wilson</small>
                            <small className='p2'>August 20, 2022</small>
                        </div>
                    </div>
                    <div className="card">
                        <img src={Threeimg} alt="" />
                        <div className="c-info-up">
                            <button className="btn-dark">Technology</button>
                            <h2>The Impact of Technology on the Workplace: How Technology is Changing</h2>
                        </div>
                        <div className="author">
                            <img src={Autthree} alt="" />
                            <small className='p1'>Tracey Wilson</small>
                            <small className='p2'>August 20, 2022</small>
                        </div>
                    </div>
                    <div className="card">
                        <img src={C4} alt="" />
                        <div className="c-info-up">
                            <button className="btn-dark">Technology</button>
                            <h2>The Impact of Technology on the Workplace: How Technology is Changing</h2>
                        </div>
                        <div className="author">
                            <img src={A4} alt="" />
                            <small className='p1'>Tracey Wilson</small>
                            <small className='p2'>August 20, 2022</small>
                        </div>
                    </div>
                    <div className="card">
                        <img src={C5} alt="" />
                        <div className="c-info-up">
                            <button className="btn-dark">Technology</button>
                            <h2>The Impact of Technology on the Workplace: How Technology is Changing</h2>
                        </div>
                        <div className="author">
                            <img src={A5} alt="" />
                            <small className='p1'>Tracey Wilson</small>
                            <small className='p2'>August 20, 2022</small>
                        </div>
                    </div>
                    <div className="card">
                        <img src={C6} alt="" />
                        <div className="c-info-up">
                            <button className="btn-dark">Technology</button>
                            <h2>The Impact of Technology on the Workplace: How Technology is Changing</h2>
                        </div>
                        <div className="author">
                            <img src={A6} alt="" />
                            <small className='p1'>Tracey Wilson</small>
                            <small className='p2'>August 20, 2022</small>
                        </div>
                    </div>
                    <div className="card">
                        <img src={C7} alt="" />
                        <div className="c-info-up">
                            <button className="btn-dark">Technology</button>
                            <h2>The Impact of Technology on the Workplace: How Technology is Changing</h2>
                        </div>
                        <div className="author">
                            <img src={A7} alt="" />
                            <small className='p1'>Tracey Wilson</small>
                            <small className='p2'>August 20, 2022</small>
                        </div>
                    </div>
                    <div className="card">
                        <img src={C8} alt="" />
                        <div className="c-info-up">
                            <button className="btn-dark">Technology</button>
                            <h2>The Impact of Technology on the Workplace: How Technology is Changing</h2>
                        </div>
                        <div className="author">
                            <img src={A8} alt="" />
                            <small className='p1'>Tracey Wilson</small>
                            <small className='p2'>August 20, 2022</small>
                        </div>
                    </div>
                    <div className="card">
                        <img src={C9} alt="" />
                        <div className="c-info-up">
                            <button className="btn-dark">Technology</button>
                            <h2>The Impact of Technology on the Workplace: How Technology is Changing</h2>
                        </div>
                        <div className="author">
                            <img src={A9} alt="" />
                            <small className='p1'>Tracey Wilson</small>
                            <small className='p2'>August 20, 2022</small>
                        </div>
                    </div>
                </div>
                <div className="count">
                    <a href="#"><button className="btn-view-all">View All Post</button></a>
                </div>
                <div className="adv">
                    <h4>Advertisement</h4>
                    <h2>You can place ads</h2>
                    <h3>750 X 100</h3>
                </div>

            </div>
        </div>
    )
}

export default Cards

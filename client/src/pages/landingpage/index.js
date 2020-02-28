import React from 'react';
import './layout.css'
import './style.css'
import Testimonial from '../../components/Testimonial'
import Description from '../../components/Description'

function LandingPage() {
    return (
        <div className="container-land">
            <div className="pic1">
            </div>
            <div className="video">
                <video width="100%" height="100%" autoPlay loop>
                    <source src="https://i.imgur.com/V3v6PCy.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="pic2">PIC2</div>
            <div className="titlelanding">WELCOME TO
            </div>
            <div className="logolanding">
                <img src="https://i.imgur.com/SyJcxQk.png">
                </img>
            </div>
            <div className="description">
                <Description />
            </div>
            <div className="testimonial">
                <Testimonial />
            </div>

        </div>
    )
}
export default LandingPage;
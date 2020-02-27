import React from 'react';
import './layout.css'
import './style.css'

function LandingPage() {
    return (
        <div className="container-land">
            <div className="pic1">PIC1</div>
            <div className="video">
                <video width="100%" height="100%" autoplay="autoplay" loop="loop">
                    <source src="https://i.imgur.com/V3v6PCy.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="pic2">PIC2</div>
            <div className="main">TEST2</div>

        </div>
    )
}
export default LandingPage;
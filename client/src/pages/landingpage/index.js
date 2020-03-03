import React from 'react';
import './layout.css'
import './style.css'
import Testimonial from '../../components/Testimonial'
import Description from '../../components/Description'
import testinfo from './testimonialinfo.json'

function LandingPage() {
    return (
        <div className="container-land">
            <div className="pic1">
            </div>
            <div className="logolanding">
                <img src="https://i.imgur.com/SyJcxQk.png">
                </img>
            </div>
            <div className="tagline">
                <p>All your favorite heroes <br /> delivered right to your door</p>
                <img src="https://i.imgur.com/DjjRlwq.png">

                </img>
            </div>
            <div className="pic2"></div>

            <div className="description">
                <Description />
            </div>
            <div className="testimonial1">
                <Testimonial
                    img={testinfo[0].img}
                    speechimg={testinfo[0].speechimg}
                    name={testinfo[0].name}
                    speechtext1={testinfo[0].speechtext1}
                    speechtext2={testinfo[0].speechtext2}
                    speechtext3={testinfo[0].speechtext3} />
            </div>
            <div className="testimonial2">
                <Testimonial
                    img={testinfo[1].img}
                    speechimg={testinfo[1].speechimg}
                    name={testinfo[1].name}
                    speechtext1={testinfo[1].speechtext1}
                    speechtext2={testinfo[1].speechtext2}
                    speechtext3={testinfo[1].speechtext3}
                />
            </div>

        </div>
    )
}
export default LandingPage;



{/* <div className="video">
                <video width="100%" height="100%" autoPlay loop>
                    <source src="https://i.imgur.com/V3v6PCy.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div> */}
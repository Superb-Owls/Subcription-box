import React from 'react';
import './layout.css'
import './style.css'
import Testimonial from '../../components/Testimonial'
import Description from '../../components/Description'
import testinfo from './testimonialinfo.json'
import Signup from '../../components/Signup'

function LandingPage() {
    return (
        <>
            <div className="container-land">
                <div className="pic1">
                    <img src="https://i.imgur.com/ylvGZdJ.png" alt="SpiderMan"></img>
                </div>
                <div className="logolanding">
                    <img src="https://i.imgur.com/SyJcxQk.png" alt="HeroBox"></img>
                </div>
                <div className="tagline">
                    <p>All your favorite Marvel comics <br /> delivered right to your door</p>
                    <img src="https://i.imgur.com/DjjRlwq.png" alt="AllHeroes">

                    </img>
                </div>
                <div className="pic2">
                    <img src="https://i.imgur.com/xgTah3d.png" alt="CaptainAmerica"></img>
                </div>

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
                <div className="dp"></div>
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
                <div className="signup">
                    <Signup />
                </div>
                <div className="footerwrapper">
                    <div className="footlogo">
                        <img src="https://i.imgur.com/SyJcxQk.png" height="200" width="200" alt="heroes"></img>
                    </div>
                    <div className="footlinks2">
                        <a href="/LoginOrSignUp">LOGIN</a>
                        <br />
                        <a href="/Tiers">SUBSCRIPTIONS</a>
                        <br />
                        <a href="/About">ABOUT</a>
                        <br />
                        <a href="/PrivacyPolicy">PRIVACY POLICY</a>
                        <br />
                        <a href="https://github.com/Superb-Owls/Subscription-box">GITHUB</a>
                        <br />
                        <a href="/Sitemap">SITEMAP</a>
                        <br />
                        <br />
                        © HEROBOX 2020
                    </div>
                    <div className="footlinks1">
                        THIS IS A STUDENT PROJECT, NOT AN ACTUAL E-COMMERCE SITE.
                        <br />
                        <br />
                        PLEASE DO NOT ENTER IN YOUR CREDIT CARD INFORMATION.
                        <br />
                        <br />
                        NO ACTUAL SERVICE WILL BE PROVIDED.
                    </div>
                </div>
            </div>
        </>
    )
}
export default LandingPage;




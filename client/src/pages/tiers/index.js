import React from 'react';
import './layout.css'
import './style.css'
import TiersContainer from '../../components/TiersContainer'
// import Button from "../../components/Button"



function Tiers(props) {
    console.log('did the props show in in tiers ????????????', props)


    // function clickHero(e){
    //     return(

    //     )
    // }

    return (
        <>

            <div className="container-tiers">
                <div className="titlet">CHOOSE YOUR HEROES</div>
                <div className="tier1"></div>
                <div className="tier2"></div>
                <TiersContainer selectedHero={props.selectedHero} setHero={props.setHero} />
                <div className="footerwrapper">
                    <div className="footlogo">
                        <img src="https://i.imgur.com/SyJcxQk.png" height="200" width="200"></img>

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


export default Tiers;

// [
//     {
//         name: "Spiderman",
//         grid- name: "hero1",
//     show - collapsible: "show-spiderman"
//     }
// ]

// function TierHero(props) {
//     return (
//         <div className="heroCard" style={{ "grid-area": props["grid-name"] }} >
//             <div className="hoverImage hover1"></div>
//         </div>
//     )
// }


{/* <HeroCard shadow={element["shadow-image"]} gif={element["gif"]} key={"box-" + element.name} name={element.name} /> */ }
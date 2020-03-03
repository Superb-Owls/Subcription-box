import React from "react";
import './style.css'

function Navbar(props) {

    function openNav() {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("root").style.marginRight = "250px";
    }
    function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("root").style.marginRight = "0";
    }
    console.log('PROPS IN THE NAV BAR %%%%%%%%%%%%%%%%%%%%%', props)
    return (
        <>
            <div className="topnav">
                <a className="active" href="/">
                    HERO BOX
                </a>
                <a className="openbtn" onClick={openNav} style={{ float: "right" }}>
                    <i className="fa fa-shopping-cart"></i>

                </a>
                <a href="login" style={{ float: "right" }}>LOGIN</a>
                <a href="/tiers" style={{ float: "right" }}>SUBSCRIPTIONS</a>
            </div>

            <div id="mySidebar" className="sidebar">
                <div className="closebtn" onClick={closeNav} href="javascript:void(0)">&times;</div>

                {/* <div>Your selections</div> */}
    <h1>About to but {props.selectedHero} for $20 !!!!</h1>
    <button>Buy Now!</button>
                {/* <div>Go to your cart</div> */}
            </div>
        </>
    )
}

export default Navbar;
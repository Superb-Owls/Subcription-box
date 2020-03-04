import React from "react";
import './style.css'
import {withRouter} from 'react-router-dom'

function Navbar(props) {

    function openNav() {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("root").style.marginRight = "250px";
    }
    function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("root").style.marginRight = "0";
    }
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
                <a href="/about" style={{ float: "right" }}>ABOUT US</a>
            </div>

            <div id="mySidebar" className="sidebar">
                <div className="closebtn" onClick={closeNav} href="javascript:void(0)">&times;</div>

                {/* <div>Your selections</div> */}
    {props.selectedHero.comicsToBuy.map((eachComic)=>{
        return (
            <div>
        <h1>{eachComic.name}</h1> 
        <h4>${eachComic.price}</h4>
        </div>
        )
    })}
    <button className='checkoutBtn' onClick={() => {props.history.push('/Purchase')}}>Buy Now!</button>
                {/* <div>Go to your cart</div> */}
            </div>
        </>
    )
}

export default withRouter (Navbar);
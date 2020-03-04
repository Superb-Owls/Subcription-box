import React from 'react';
import './style.css'


function Testimonial(props) {
    const img = props.img;
    const name = props.name;
    const text1 = props.speechtext1;
    const text2 = props.speechtext2;
    const text3 = props.speechtext3;

    return (
        <>
            <div className="testwrapper">
                <img className="test" src={img} alt="pic"></img>
                <p className="quote">{text1}<br />{text2}<br />{text3}</p>
                <p className="name">{name}</p>
            </div>


        </>
    )
}
export default Testimonial;
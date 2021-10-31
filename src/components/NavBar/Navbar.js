import './Navbar.css';
import React from 'react';
import img1 from './img1.png'
import img2 from './img2.svg'
import img3 from './img3.svg'

function Navbar(){
    return(
        <div className="Navbar">
            <div className="l-side">
                <div className="lin">
                    <a href="/home">Home</a>
                    <a href="/home">Projects</a>
                    <a href="/home">About</a>
                    <a href="/home">Services</a>
                </div>
                <div className="images">
                    <a href="/home">
                        <img src={img1} alt="" />
                    </a>
                    <a href="/home">
                        <img src={img2} alt="" />
                    </a>
                    <a href="/home">
                        <img src={img3} alt="" />
                    </a>
                </div>
            </div>
            <div className="r-side">
                <div className="content">
                    Hello
                </div>
            </div>
        </div>
    )
}

export default Navbar;
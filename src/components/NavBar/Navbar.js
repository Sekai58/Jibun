import './Navbar.css';
import Introd from './pages/intro'
import About from './pages/about'
import Proj from './pages/project'
import Service from './pages/services'

import React from 'react';
import img1 from './img1.png'
import img2 from './img2.svg'
import img3 from './img3.svg'


function Navbar(){
    let Contents
    switch(window.location.pathname)
    {
        case "/":
            Contents = <Introd/>
            break
        case "/projects":
            Contents = <Proj/>
            break
        case "/about":
            Contents = <About/>
            break
        case "/services":
            Contents = <Service/>
            break
    }
    return(
        <div className="Navbar">
            <div className="l_side">
                <div className="lin">
                    <a href="/">Home</a>
                    <a href="/projects">Projects</a>
                    <a href="/about">About</a>
                    <a href="/services">Services</a>
                </div>
                <div className="images">
                    <a href="https://github.com/Sekai58">
                        <img src={img1} alt="" />
                    </a>
                    <a href="https://twitter.com/">
                        <img src={img2} alt="" />
                    </a>
                    <a href="https://www.youtube.com/">
                        <img src={img3} alt="" />
                    </a>
                </div>
            </div>
            <div className="r_side">
                <div className="content">
                    {Contents}
                </div>
            </div>
        </div>
    )
}

export default Navbar;
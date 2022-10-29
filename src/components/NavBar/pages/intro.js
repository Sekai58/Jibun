import React from "react";
import './intro.css';
import imag from './intro_profile.jpg'

function Introd() {
  return (
    <div className="intr">
        <div className="left_part"><h1>Amrita Bhattarai</h1>An Engineering student at Pulchowk Campus and a web developer enthusiast currently learning web development.</div>
        <div className="right_part">
          <img src={imag} alt=""></img>
        </div>
    </div>
  );
}

export default Introd;

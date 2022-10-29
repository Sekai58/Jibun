import React from "react";
import './project.css'

function Proj() {
  return (
    <div className="prj">
        <div className="prj_intro"><h4>The projects I have worked under are mostly in C, JS and python. You can view the source code under github link.</h4></div>
        <div className="list">
          <div className="ichi"><h3>A* path finder</h3>A project in C that finds the path between two points using A* algorithm.</div>
          <div className="ni"><h3>Rubik's Cube</h3>A project in C using SDl library for cube construction and solving.</div>
          <div className="san"><h3>Capture The Flag</h3>A python project that uses multi-agent reinforcement learning algorithm to capture the ememy flag while playing dogeball.</div>
          <div className="yan"><h3>QRCode Generator</h3>A JavaScript poject that allows generation of QRCode online.</div>
        </div>
    </div>
  );
}

export default Proj;

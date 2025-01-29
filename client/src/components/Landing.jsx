import React, { useState, useEffect, useCallback } from "react";
import nbg from "../assets/nbg.svg"
import modem from "../assets/modem.svg"
import ftext from "../assets/ftext.svg"

import './style.css'
import './alo.css'
import { useNavigate } from "react-router-dom";


const Landing = ({start, handleAttackClick}) => {
  const navigate=useNavigate()
  return (
    
        <div
          className="relative bg-center h-screen"
          style={{
            backgroundImage: `url(${nbg})`,
          }}
        >
          <img
            src={ftext}
            className="absolute h-fit size-96 transform -translate-x-1/2  left-1/2"
            style={{ top: "250px" }}
          />
          <img
            src={modem}
            className="absolute h-40 w-auto transform -translate-x-1/2  left-1/2"
            style={{ bottom: "15px" }}
          />
          <div className="flex justify-center">
            <div className="container1 font-Mont font-bold"  style={{"marginTop":"350px"}}>
              {/* First row of text */}
              <div className="text1 " style={{ "--j": 0 }}>
                <span style={{ "--i": 0 }}>A</span>
                <span style={{ "--i": 1 }}>N</span>
                <span style={{ "--i": 2 }}>O</span>
                <span style={{ "--i": 3 }}>N</span>
                <span style={{ "--i": 4 }}>A</span>
                <span style={{ "--i": 5 }}>L</span>
                <span style={{ "--i": 6 }}>Y</span>
              </div>

              {/* Second row of text */}
              <div className="text1" style={{ "--j": 1 }}>
                <span style={{ "--i": 0 }}>N</span>
                <span style={{ "--i": 1 }}>N</span>
                <span style={{ "--i": 2 }}>O</span>
                <span style={{ "--i": 3 }}>M</span>
                <span style={{ "--i": 4 }}>N</span>
                <span style={{ "--i": 5 }}>L</span>
                <span style={{ "--i": 6 }}>Y</span>
              </div>

              {/* Third row of text */}
              <div className="text1" style={{ "--j": 2 }}>
                <span style={{ "--i": 0 }}>O</span>
                <span style={{ "--i": 1 }}>N</span>
                <span style={{ "--i": 2 }}>O</span>
                <span style={{ "--i": 3 }}>A</span>
                <span style={{ "--i": 4 }}>O</span>
                <span style={{ "--i": 5 }}>L</span>
                <span style={{ "--i": 6 }}>Y</span>
              </div>

              {/* Fourth row of text */}
              <div className="text1" style={{ "--j": 3 }}>
                <span style={{ "--i": 0 }}>M</span>
                <span style={{ "--i": 1 }}>N</span>
                <span style={{ "--i": 2 }}>O</span>
                <span style={{ "--i": 3 }}>L</span>
                <span style={{ "--i": 4 }}>M</span>
                <span style={{ "--i": 5 }}>L</span>
                <span style={{ "--i": 6 }}>Y</span>
              </div>
              <div className="text1" style={{ "--j": 4 }}>
                <span style={{ "--i": 0 }}>A</span>
                <span style={{ "--i": 1 }}>N</span>
                <span style={{ "--i": 2 }}>O</span>
                <span style={{ "--i": 3 }}>Y</span>
                <span style={{ "--i": 4 }}>A</span>
                <span style={{ "--i": 5 }}>L</span>
                <span style={{ "--i": 6 }}>Y</span>
              </div>

              <div className="text1" style={{ "--j": 5 }}>
                <span style={{ "--i": 0 }}>L</span>
                <span style={{ "--i": 1 }}>N</span>
                <span style={{ "--i": 2 }}>O</span>
                <span style={{ "--i": 3 }}>M</span>
                <span style={{ "--i": 4 }}>L</span>
                <span style={{ "--i": 5 }}>L</span>
                <span style={{ "--i": 6 }}>Y</span>
              </div>

              <div className="text1" style={{ "--j": 6 }}>
                <span style={{ "--i": 0 }}>Y</span>
                <span style={{ "--i": 1 }}>N</span>
                <span style={{ "--i": 2 }}>O</span>
                <span style={{ "--i": 3 }}>M</span>
                <span style={{ "--i": 4 }}>Y</span>
                <span style={{ "--i": 5 }}>E</span>
                <span style={{ "--i": 6 }}>Y</span>
              </div>
            </div>
            <button
  className="absolute font-Mont opacity-100 text-xl text-white shadow-lg font-bold animate-bounce neon-glow" 
  style={{ bottom: "169px", left: "970px" }}>          
                " Start "
              </button>
            <div
              className="absolute flex justify-center items-center h-fit"
              style={{ bottom: "76px", left: "1005px" }}
            >
              <label className="switch">
                    <input className="chk" type="checkbox" />
                    <span className="slider" onClick={() =>{
                      
  
                      setTimeout(() => {
                        console.log('This is delayed by 1 second');
                        handleAttackClick({ attackId: 1, attackData: start?.data })
                      }, 1000); 
                      
                     navigate("/home")

                    }
                }
                >
                </span>
              </label>

            </div>
          </div>
        </div>
    
  );
};

export default Landing;

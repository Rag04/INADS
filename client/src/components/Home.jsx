import React from "react";
import { Dot } from "react-animated-dots";
import { GoDotFill } from "react-icons/go";
import Alert from "./Alert";
import bg from "../assets/attackerrr.svg";
import model from "../assets/catch.svg";
import bgg from "../assets/bggggg.svg"
import band from "../assets/Rectangle.svg"
import devil from "../assets/Realdevil.svg"
import simfont from "../assets/SIMULATION.svg"
import attackfont from "../assets/ATTACK.svg"
import goodf from "../assets/goodf.svg"
import badf from "../assets/badf.svg"
import { useNavigate } from "react-router-dom";

const Home = ({ currentId, attacks,activeAttackId, handleAttackClick, handleStop}) => {
  const navigate=useNavigate()
  return (
    <div
      className="bg-center h-screen justify-center"
      style={{
        backgroundImage: `url(${bgg})`,
      }}
    >
      <div className="moving">
        {currentId === 1 ? (
          <img src={goodf} className="goodfile absolute size-20 moving-box" />
        ) : (
          <img src={badf} className="badfile absolute size-20 moving-box" />
        )}
      </div>
      <img src={band} className="absolute h-full px-48" />
      <img
        src={simfont}
        className="absolute h-10 transform -translate-x-1/2  left-1/2"
        style={{ top: "90px" }}
      />
      <img
        src={attackfont}
        className="absolute h-8 transform -translate-x-1/2  left-1/2"
        style={{ top: "50px" }}
      />
      <div className="relative flex items-center justify-between py-20 px-20">
        <div className="w-1/4 relative">
          <img src={bg} alt="Vending Machine" className="w-full h-auto" />
          <img
            src={devil}
            className="absolute h-32 inset-0 flex items-center justify-center animate-pulse"
            style={{ top: "495px", left: "166px" }}
          />
          <div
            className="absolute inset-0 flex flex-col items-center justify-center"
            style={{ top: "-95px" }}
          >
            {attacks.map((attack) => (
              <button
                key={attack.id}
                className={`font-button w-1/2 font-bold font-Mont text-white py-3 px-10 m-2 rounded 
                    ${
                      activeAttackId === attack.id
                        ? "bg-red1" // Apply darkened style if active
                        : "bg-pblue hover:bg-lblue active:bg-lblue"
                    }`}
                onClick={() =>
                  handleAttackClick({
                    attackId: attack.id,
                    attackData: attack?.data,
                  })
                }
              >
                {attack.name}
              </button>
            ))}
          </div>
        </div>
        {/* <button 
              className="bg-red-500 font-Mont font-bold text-white text-lg w-44 py-2 px-6 rounded hover:bg-red-600 cursor-pointer absolute top-3/4 left-1/2"
              onClick={handleStop}
              >
              Stop
              </button> */}

        <button
          className="button transform -translate-x-1/2  left-1/2 font-Mont font-bold"
          style={{ top: "200px", left: "500px" }}
          onClick={()=>{
            handleStop()
            navigate("/")

          }}
        >
          <svg className="svgIcon" viewBox="0 0 384 512">
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
          </svg>
        </button>

        <Dot>
          <GoDotFill fontSize={25} />
        </Dot>
        <Dot>
          <GoDotFill fontSize={25} />
        </Dot>
        <Dot>
          <GoDotFill fontSize={25} />
        </Dot>
        <Dot>
          <GoDotFill fontSize={25} />
        </Dot>
        <Dot>
          <GoDotFill fontSize={25} />
        </Dot>
        <Dot>
          <GoDotFill fontSize={25} />
        </Dot>
        <Dot>
          <GoDotFill fontSize={25} />
        </Dot>
        <Dot>
          <GoDotFill fontSize={25} />
        </Dot>
        <Dot>
          <GoDotFill fontSize={25} />
        </Dot>
        {/* <div className="w-auto relative">
              <img
                src={model}
                alt="Vending Machine"
                className="w-full h-1/2"
                style={{ top: "-100px" }}
              />
              <Alert status={status} />
            </div> */}

        <div className="card">
          <div className="bg"></div>
          <div className="blob"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;

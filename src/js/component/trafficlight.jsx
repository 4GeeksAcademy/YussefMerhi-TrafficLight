import React, { useState } from "react";
import ColorButton from './ColorButton';

const TrafficLight = () => {
    const [redLight, setRedLight] = useState("off")
    const [amberLight, setAmberLight] = useState("off")
    const [greenLight, setGreenLight] = useState("off")
    const [purpleLight, setPurpleLight] = useState("off")
    const [color, setColor] = useState("red");

    function switchRed() {
        setRedLight("lit")
        setAmberLight("off")
        setGreenLight("off")
        setPurpleLight("off")
    }
    function switchAmber() {
        setAmberLight("lit")
        setRedLight("off")
        setGreenLight("off")
        setPurpleLight("off")
    }
    function switchGreen() {
        setGreenLight("lit")
        setRedLight("off")
        setAmberLight("off")
        setPurpleLight("off")
    }
    function switchPurple() {
        setPurpleLight("lit")
        setRedLight("off")
        setAmberLight("off")
        setGreenLight("off")
    }

    function switchColor() {
        if(color === "red"){
            setColor("green");
            switchGreen();
        } else if(color === "green"){
            setColor("amber");
            switchAmber();
        } else if(color === "amber"){
            setColor("purple");
            switchPurple();
        } else {
            setColor("red");
            switchRed();
        }
    }

    return(
        <div className="d-flex justify-content-center">
            <div className="palo"></div>
            <div className="card d-flex align-items-center flex-column">
                    <button onClick={switchRed} className={`mb-3 red ${redLight == "off" ? "off" : "lit"}`}></button>
                    <button onClick={switchAmber} className={`mb-3 amber ${amberLight == "off" ? "off" : "lit"}`}></button>
                    <button onClick={switchGreen} className={`mb-3 green ${greenLight == "off" ? "off" : "lit"}`}></button>
                    <button onClick={switchPurple} className={`mb-3 purple ${purpleLight == "off" ? "off" : "lit"}`}></button>
                    <ColorButton switchColor={switchColor} />
            </div>
        </div>
    )
}

export default TrafficLight

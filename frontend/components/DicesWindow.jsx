import Dice from "./dice";
import { useState } from "react";

function DiceWindow(props){


    return (
    <div className="flex flex-col justify-center items-center max-w-[600px] w-full py-10  shadow-xl rounded-md  border-1 border-solid border-gray-100">
        <h2 className="text-3xl font-bold m-4">Dice</h2>
        <div className="flex flex-row justify-center mx-auto gap-2">
            <Dice number={props.die1} isShaking={props.isShaking}/>
            <Dice number={props.die2} isShaking={props.isShaking}/>
            <Dice number={props.die3} isShaking={props.isShaking}/>
            <Dice number={props.die4} isShaking={props.isShaking}/>
            <Dice number={props.die5} isShaking={props.isShaking}/>
            <Dice number={props.die6} isShaking={props.isShaking}/>
        </div>
    </div>);
}

export default DiceWindow;
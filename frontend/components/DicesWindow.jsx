import Dice from "./dice";
import { useState } from "react";

function DiceWindow(props){


    return (
    <div className="flex flex-col justify-center items-center max-w-[700px] w-full py-10  shadow-xl rounded-md m-10">
        <h2 className="text-3xl font-bold m-4">Dice</h2>
        <div className="flex flex-row justify-center mx-auto">
            <Dice number={props.die1}/>
            <Dice number={props.die2}/>
            <Dice number={props.die3}/>
            <Dice number={props.die4}/>
            <Dice number={props.die5}/>
            <Dice number={props.die6}/>
        </div>
    </div>);
}

export default DiceWindow;
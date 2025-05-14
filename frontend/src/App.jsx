import React, {useState} from "react";
import DiceWindow from "../components/DicesWindow";
import Coefs from "../components/Coefs";
import BetsInput from "../components/BetsInput";
import Balance from "../components/Balance.jsx";

function App() {
    const [die1, setDie1] = useState(0);
    const [die2, setDie2] = useState(0);
    const [die3, setDie3] = useState(0);
    const [die4, setDie4] = useState(0);
    const [die5, setDie5] = useState(0);
    const [die6, setDie6] = useState(0);

    function submitHandler(){
      console.log("I got clicked");
    }

    function onChangeHandler(event){
      console.log(event.target.value);
    }

  return(
    <>

      <div className="flex flex-col gap-10 items-center justify-center">
        <DiceWindow die1={die1} die2={die2} die3={die3} die4={die4} die5={die5} die6={die6}/>
        <div className="flex justify-between max-w-[600px] w-full ">
          <Coefs coef={0.855} ActivePair={true}/>
          <div className="flex flex-col justify-between gap-10">
            <BetsInput submitHandler={submitHandler} onChangeHandler={onChangeHandler}/>
            <Balance Balance={100}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

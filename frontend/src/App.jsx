import React, {useState} from "react";
import DiceWindow from "../components/DicesWindow";
import Coefs from "../components/Coefs";
import BetsInput from "../components/BetsInput";

function App() {
    const [die1, setDie1] = useState(0);
    const [die2, setDie2] = useState(0);
    const [die3, setDie3] = useState(0);
    const [die4, setDie4] = useState(0);
    const [die5, setDie5] = useState(0);
    const [die6, setDie6] = useState(0);

    function onClickHandler(){
      setDie1(die1+1);
      setDie2(die1+1);
      setDie3(die1+1);
      setDie4(die1+1);
      setDie5(die1+1);
      setDie6(die1+1);
    }

    function submitHandler(){
      console.log("I got clicked");
    }

    function onChangeHandler(event){
      console.log(event.target.value);
    }

  return(
    <>
      <button onClick={onClickHandler}>Click me</button>
      <h1 className="text-red-300">Hello world</h1>

      <div className="flex flex-col">
        <DiceWindow die1={die1} die2={die2} die3={die3} die4={die4} die5={die5} die6={die6}/>
        <div className="flex">
          <Coefs coef={0.855} ActivePair={true}/>
          <div className="flex flex-col">
            <BetsInput submitHandler={submitHandler} onChangeHandler={onChangeHandler}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

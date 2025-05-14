import React, {useState, useEffect} from "react";
import DiceWindow from "../components/DicesWindow";
import Coefs from "../components/Coefs";
import BetsInput from "../components/BetsInput";
import Balance from "../components/Balance.jsx";

export async function initRequest(setPairCoef) {
    try {
        const response = await fetch("http://127.0.0.1:8000/gambling/init", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({}),
        });

        const data = await response.json();
        console.log(data);
        setPairCoef(data.pair_coef);
    } catch (error) {
        console.error("Ошибка при initRequest:", error);
    }
}

export async function getBalanceRequest(setUsersBalance) {
    try {
        const response = await fetch("http://127.0.0.1:8000/gambling/balance");
        const data = await response.json();
        setUsersBalance(data.balance);
        console.log(data);

    } catch (error) {
        console.error("Ошибка при getBalanceRequest:", error);
    }
}

export async function gambleRequest(usersBet) {
    try {
        const response = await fetch("http://127.0.0.1:8000/gambling/roll_dices", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              value: usersBet,
              type: "Bet"
            }),
        });

        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Ошибка при initRequest:", error);
    }
}

function resetCoefsHighlighting(setPairState, setFullHouseState, setYahtzeeState, setThreePairsState, setOtherState){
  setPairState(false);
  setFullHouseState(false);
  setYahtzeeState(false);
  setThreePairsState(false);
  setOtherState(false);
}

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function App() {
    const [die1, setDie1] = useState(0);
    const [die2, setDie2] = useState(0);
    const [die3, setDie3] = useState(0);
    const [die4, setDie4] = useState(0);
    const [die5, setDie5] = useState(0);
    const [die6, setDie6] = useState(0);
    const [pairState, setPairState] = useState(false);
    const [fullHouseState, setFullHouseState] = useState(false);
    const [yahtzeeState, setYahtzeeState] = useState(false);
    const [threePairsState, setThreePairsState] = useState(false);
    const [otherState, setOtherState] = useState(false);
    const [pairCoef, setPairCoef] = useState(1);
    const [usersBalanec, setUsersBalance] = useState(0);
    const [usersInput, setUsersInput] = useState(0);
    const [isRolling, setIsRolling] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
        console.log("Fetching data...");
        await initRequest(setPairCoef);        
        await getBalanceRequest(setUsersBalance); 
    };
        fetchData();
  }, []);

  async function submitHandler() {
    console.log("I got clicked");
    setIsButtonDisabled(true);

    try {
        const response = await gambleRequest(usersInput);
        if (response && response.result) {

            setIsRolling(true);
            setIsButtonDisabled(true);
            await delay(1000);
            setIsRolling(false);
            setIsButtonDisabled(false);

            await getBalanceRequest(setUsersBalance);

            setDie1(response.rolls[0]);
            setDie2(response.rolls[1]);
            setDie3(response.rolls[2]);
            setDie4(response.rolls[3]);
            setDie5(response.rolls[4]);
            setDie6(response.rolls[5]);

            resetCoefsHighlighting(setPairState, setFullHouseState, setYahtzeeState, setThreePairsState, setOtherState);

            switch (response.result) {
                case "pair":
                    setPairState(true);
                    break;
                case "yathzee":
                    setYahtzeeState(true);
                    break;
                case "full_house":
                    setFullHouseState(true);
                    break;
                case "three_pairs":
                    setThreePairsState(true);
                    break;
                default:
                    setOtherState(true);
            }
        } else {
            console.error("Error: response has no result.");
            setIsButtonDisabled(false);
        }
    } catch (error) {
        console.error("Error during gambling request:", error);
        setIsButtonDisabled(false);
    }
}



  function onChangeHandler(event){
    console.log(event.target.value);
      const value = Number(event.target.value) * -1;
      setUsersInput(value);
  }



  return(
    <>
    
      <div className="flex flex-col gap-10 items-center justify-center mt-30">
        <DiceWindow die1={die1} die2={die2} die3={die3} die4={die4} die5={die5} die6={die6} isShaking={isRolling}/>
        <div className="flex justify-between max-w-[600px] w-full ">
          <Coefs coef={pairCoef} ActivePair={pairState} ActiveFullHouse={fullHouseState} ActiveYahtzee={yahtzeeState} ActiveThreePairs={threePairsState} ActiveOther={otherState}/>
          <div className="flex flex-col justify-between gap-10">
            <BetsInput submitHandler={submitHandler} onChangeHandler={onChangeHandler} disableButton={isButtonDisabled}/>
            <Balance Balance={usersBalanec}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

import {
  GiInvertedDice1,
  GiInvertedDice2,
  GiInvertedDice3,
  GiInvertedDice4,
  GiInvertedDice5,
  GiInvertedDice6 
} from "react-icons/gi";
import UnknownDice from "./icons/UnknownDice";

const sides = [
  <UnknownDice     className="w-19 text-black " />, 
  <GiInvertedDice1 className="text-7xl text-black m-1" />,
  <GiInvertedDice2 className="text-7xl text-black m-1" />,
  <GiInvertedDice3 className="text-7xl text-black m-1" />,
  <GiInvertedDice4 className="text-7xl text-black m-1" />,
  <GiInvertedDice5 className="text-7xl text-black m-1" />,
  <GiInvertedDice6 className="text-7xl text-black m-1" />  
];

function Dice({ number = 0 }) {
  const index = Math.max(0, Math.min(6, number));
  return <>{sides[index]}</>;
}

export default Dice;

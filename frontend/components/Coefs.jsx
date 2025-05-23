import CoefWindow from "./ui/CoefWindow";

function Coefs(props) {
    const pairCoef = props.coef.toFixed(3);
    return (
        <div className="flex flex-col justify-center items-center max-w-[280px] w-full py-8 px-2 shadow-xl rounded-md  border-1 border-solid border-gray-100">
            <h2 className="text-2xl font-bold m-2">Prices</h2>
            <ul className="space-y-1 w-full">
                <CoefWindow Title="Pair" Coef={pairCoef} Active={props.ActivePair}/>
                <CoefWindow Title="Full house" Coef={pairCoef*2} Active={props.ActiveFullHouse}/>
                <CoefWindow Title="Yahtzee" Coef={pairCoef*3} Active={props.ActiveYahtzee} />
                <CoefWindow Title="Three Pairs" Coef={pairCoef*4} Active={props.ActiveThreePairs}/>
                <CoefWindow Title="Other" Coef={pairCoef*0} Active={props.ActiveOther}/>
            </ul>
        </div>
    );
}


export default Coefs;
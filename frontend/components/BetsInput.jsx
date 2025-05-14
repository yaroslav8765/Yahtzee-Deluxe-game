
function BetsInput({onChangeHandler, submitHandler}) {
    return(
        <div className="flex flex-col justify-center items-center max-w-[250px] w-full py-8 px-2 shadow-xl rounded-md m-10">
            <h2 className="text-2xl font-bold m-2">Bet</h2>
            <div className="flex justify-between w-[155px] ml-4">
                <input className="border-2 border-solid rounded-sm w-[60px] h-[40px] bg-gradient-to-b from-gray-300 to-white" onChange={onChangeHandler}></input>
                <button className="border-2 border-solid rounded-sm w-[80px] h-[40px] text-black font-bold bg-gradient-to-b from-white to-red-300 hover:to-red-500" onClick={submitHandler}>
                ROLL
                </button>
            </div>
        </div>
    );
}

export default BetsInput;
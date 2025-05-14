function BetsInput({ onChangeHandler, submitHandler, disableButton }) {
    return (
        <div className="flex flex-col justify-center items-center max-w-[280px] w-full py-8 px-2 shadow-xl rounded-md py-8 px-10 border-1 border-solid border-gray-100">
            <h2 className="text-2xl font-bold m-2">Bet</h2>
            <div className="flex justify-between w-[155px] ml-4">
                <input
                    className="border-2 border-solid rounded-sm w-[60px] h-[40px] 
                            bg-gradient-to-b from-gray-300 to-white 
                            text-center text-lg font-bold text-gray-800"
                    onChange={onChangeHandler}
                />
                <button
                    disabled={disableButton}
                    className={`border-2 border-solid rounded-sm w-[80px] h-[40px] text-black font-bold bg-gradient-to-b from-white to-red-300 hover:to-red-500 ${disableButton ? "bg-gray-500 cursor-not-allowed" : ""}`}
                    onClick={submitHandler}
                >
                    ROLL
                </button>
            </div>
        </div>
    );
}

export default BetsInput;

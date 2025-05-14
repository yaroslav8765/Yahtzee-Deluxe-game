
function Balance({Balance}){
    return (
        <div className="flex flex-col justify-center items-center max-w-[280px] w-full py-4 px-2 shadow-xl rounded-md border-1 border-solid border-gray-100">
            <h2 className="text-2xl font-bold m-2">Your balance</h2>
            <p className="font-medium mx-2 text-lg">{Balance}</p>
        </div>
    );
}

export default Balance;
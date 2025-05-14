
function CoefWindow(props){
    
    return(
        <li className="flex justify-between">
            <span className={`font-medium mx-2 text-lg ${props.Active ? "text-red-500" : "text-black"} `}>{props.Title}</span>
            <span className={`font-extrabold mx-2 text-lg ${props.Active ? "text-red-500" : "text-black"} `}>x{props.Coef}</span>
        </li>
    );
}

export default CoefWindow;
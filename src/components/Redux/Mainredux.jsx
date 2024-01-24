import React from "react";
import { incnumber,decnumber } from "./Action.jsx";
import { useDispatch ,useSelector } from "react-redux";
 function Mainredux(){ 
    let Dispatch =useDispatch();
    const number = useSelector(state =>state.change2);
    return(
        <div style={{paddingTop:'122px'}}>
         {console.log(number)}
         <input type="text" onChange={(e)=>{Dispatch(incnumber(e.target.value))}} />
         <button onClick={()=>{Dispatch(incnumber("vinay"))}}> inc</button>
         <h1>hello redux{number}</h1>
         <button onClick={()=>{Dispatch(decnumber(5))}}> dec</button>
        
        </div>
    )
}
export default Mainredux;
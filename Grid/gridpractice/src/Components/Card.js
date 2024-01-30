import React from "react";
const Card= (props)=>{
  return(
    <div className="bg-[rgba(255,0,255,0.5)]; pt-[20px] w-[450px] text-center rounded-[30px]">
    <div className="w-[280px] h-[280px] mb-[20px] mx-auto"><img className="h-[280px] object-cover rounded-full opacity-100" src={props.img} alt={props.name}/></div>
    <div>
      <h1 className="text-red-500 text-2xl">{props.name}</h1>
      <p className="p-[20px]">{props.details}</p>
    </div>
  </div>
 
  );   
}
export default Card;
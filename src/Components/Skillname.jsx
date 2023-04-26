import React from "react";

const Skillname = (props) => {
  return (
    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
      <img className="max-w-[80px] min-h-[80px] max-h-[80px] mx-auto" src={props.name} alt="Html icon" />
      <p className="my-4">{props.title}</p>
    </div>
  );
};

export default Skillname;

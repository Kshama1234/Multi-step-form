import React, { useEffect, useState } from "react";

const Step = ({ steps , title, active}) => {
  const [bg, setBg] = useState("");
  useEffect(() => {
    if (active) setBg("bg-[yellow]");
    else setBg("");
  }, [active]);

  return (
    <div className="flex text-left space-x-7 text-black">
      <div
        className={`font-bold border border-[yellow] p-2 ${bg} text-center w-10 h-10 rounded-full`}
      >
        {steps}
      </div>
  
    </div>
  );
};

export default Step;
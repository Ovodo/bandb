import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Checkmark from "./Checkmark";

const bg =
  "rounded mr-3 mb-2 scale-70 flex flex-col items-center justify-center space-y-3 w-20 h-20 border-2 border-teal-600";

const Box = ({ sticks, day }) => {
  const dailyClaim = useSelector((state) => state.App.dailyClaim);

  const bg1 = dailyClaim <= sticks ? null : "bg-gray-950";

  return (
    <div className={`${bg} + ${bg1}`}>
      {dailyClaim > sticks ? (
        <Checkmark />
      ) : (
        <strong className='text-2xl text-teal-600'>+{sticks}</strong>
      )}
      <p className='text-teal-600'>Day {day}</p>
    </div>
  );
};

export default Box;

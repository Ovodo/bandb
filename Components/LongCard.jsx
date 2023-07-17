import React from "react";

export default function LongCard({ title }) {
  return (
    <div className='bg-white shadow-md p-5 w-[93%] h-[15vh] shadow-gray-400 rounded-md'>
      <p>{title}</p>
    </div>
  );
}

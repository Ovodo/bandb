import React from "react";

export default function LongCard({ title }) {
  return (
<div className='bg-white shadow-md p-5 w-[80vw] md:w-[87vw] lg:w-[92%] h-[15vh] shadow-gray-400 rounded-md'>
  <font size='5'><b>{title}</b></font>
</div>
  );
}

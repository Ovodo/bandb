import React from "react";
import { useSelector } from "react-redux";

export default function LongCard({ title, text, children, width, background }) {
  const { theme } = useSelector((state) => state.Theme);
  const textTheme = theme ? "text-slate-950" : "text-slate-400";
  const backgroundTheme = theme ? "bg-slate-50" : "bg-slate-900";

  return (
    <div
      style={{ width: width, backgroundColor: background }}
      className={`${backgroundTheme} border-t-[1px] border-slate-500 border-opacity-10 self-center shadow-md ${
        theme ? "shadow-slate-300" : "shadow-slate-500"
      } p-5 w-[80vw] h-full md:w-[87vw] lg:w-[95%] rounded-md`}
    >
      <h1 className={`${textTheme} text-2xl font-bold mb-4`}>{title}</h1>
      {children}
      <p className={`text-lg`}>{text}</p>
    </div>
  );
}

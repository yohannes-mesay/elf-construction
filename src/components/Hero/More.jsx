import { Container } from "@mui/material";
import { Link } from "react-router-dom";

function More() {
  return (
    <div className="absolute flex bottom-[-3%] md:gap-[500px] gap-[100px] lg:gap-[550px] md:left-[23%] items-center z-50 py-4 border-0 justify-between border bg-[#1c6ce4]">
      <div className="uppercase  text-slate-100 ml-6 font-bold">For more information</div>
      <Link to="contactus" className="text-slate-100 bg-slate-800 px-2.5 py-2 rounded-sm uppercase font-extrabold   mr-6">CONTACT US</Link>
    </div>
  );
}

export default More;

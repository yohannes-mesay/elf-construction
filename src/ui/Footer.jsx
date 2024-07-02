import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
function Footer() {
  return (
    <div className="mt-10">
      <div className=" gap-5 md:gap-0 md:px-48 px-5 flex-wrap py-20 flex md:flex-row flex-col justify-around bg-black">
        <div>
          <span className="flex gap-2 items-center">
            <hr className=" w-0.5 h-4 rounded-full bg-[#1c6ce4]" />
            <p className=" font-bold font-[kanit] text-lg uppercase text-slate-100 ">
              about us
            </p>
          </span>
          <p className="text-slate-100 w-96 font-sans font-[150] text-sm mt-2 md:mt-5">
            ELF construction: Your trusted local construction company.
            Specializing in commercial and residential projects . Dedicated to
            quality, value, and consistency
            <span>
              <NavLink to="about">...</NavLink>
            </span>
          </p>
        </div>
        <div>
          <span className="flex gap-2 items-center">
            <hr className=" w-0.5 h-4 rounded-full bg-[#1c6ce4]" />
            <p className=" font-bold font-[kanit] text-lg uppercase text-slate-100 ">
              working hours
            </p>
          </span>
          <p className="text-slate-100 w-96 font-sans font-[150] text-sm mt-2 md:mt-5">
            We work 6 days a week, every day excluding major holidays and
            sunday. Contact us if you have an emergency, with our Contact form.
          </p>
        </div>
        <div>
          <span className="flex gap-2 items-center">
            <hr className=" w-0.5 h-4 rounded-full bg-[#1c6ce4]" />
            <p className=" font-bold font-[kanit] text-lg uppercase text-slate-100 ">
              services
            </p>
          </span>
          <div className="text-slate-100 font-sans font-[150] text-sm mt-2 md:mt-5">
            <NavLink to="services" className="flex flex-col gap-4">
              <div className="hover:text-[#5288da]">
                <KeyboardArrowRightIcon fontSize="small" />
                Excavation
              </div>
              <div className="hover:text-[#5288da]">
                <KeyboardArrowRightIcon fontSize="small" />
                Foundation
              </div>
              <div className="hover:text-[#5288da]">
                <KeyboardArrowRightIcon fontSize="small" />
                structural/skeleton
              </div>
              <div className="hover:text-[#5288da]">
                <KeyboardArrowRightIcon fontSize="small" />
                Finishing
              </div>
              <div className="hover:text-[#5288da]">
                <KeyboardArrowRightIcon fontSize="small" />
                Interior design
              </div>
              <div className="hover:text-[#5288da]">
                <KeyboardArrowRightIcon fontSize="small" />
                Renovation
              </div>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="py-10 text-slate-100 text-xs flex items-center justify-center bg-[#1c6ce4]">Copyright © 2024, Developed by <a href="https://github.com/yohannes-mesay" target="_blank" className="font-[italic]" >&nbsp;@yohannes</a> </div>
    </div>
  );
}

export default Footer;

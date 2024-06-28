import Logo from "../../../public/assets/images/logo.png  ";
import Logofull from "../../../public/assets/images/logofull.png";
import Navbar from "../Navbar/Navbar";
function Info() {
  return (
    <div className="mt-5 flex items-center flex-wrap justify-center gap-5 sm:gap-16">
      <img src={Logo} className="w-30 h-20" />
      <div className="ml-28 flex flex-wrap gap-5 sm:gap-16 item-center">
        <div className="relative left-10">
          <p className="text-slate-500 mb-1">Call Us</p>
          <p className="font-semibold relative right-1/4 ">+251 95 499 8471</p>
        </div>
        <div className="relative left-10">
          <p className="text-slate-500 mb-1">Email Us</p>
          <p className="font-semibold relative right-1/4">
            elfconstruction27@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Info;

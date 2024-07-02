import LogoText from "../../../public/assets/images/logotext.png";
import Logo from "../../../public/assets/images/logo.png";
import Navbar from "../Navbar/Navbar";
import Button from "../../ui/Button";
function Info() {
  return (
    <div className="relative mt-5 mb-7 flex items-center flex-wrap justify-center gap-5 xl:gap-52">
      <img src={Logo} className="w-30 h-20" />
      <div className="ml-28 flex flex-wrap gap-5 tinsh:gap-16 item-center">
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
        <div className="relative ml-6">
          <Button type="primary" to="contact">Contact Us</Button>
        </div>
      </div>
    </div>
  );
}

export default Info;

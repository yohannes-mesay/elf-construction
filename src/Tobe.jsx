import HomeIcon from '@mui/icons-material/Home';
import { NavLink } from 'react-router-dom';
function Tobe() {
  return (
    <div className="absolute flex items-center flex-col justify-center scroll-m-0 overflow-clip top-0 z-[-2] h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <p className="uppercase text-3xl text-slate-50 font-serif  font-bold">To be implemented</p>
      <NavLink to="/" className="bg-slate-50 mt-4 md:scale-125 animate-pulse" ><HomeIcon /></NavLink>
    </div>
  );
}

export default Tobe;
("");

import {
  AccessAlarm,
  Facebook,
  Instagram,
  LocationCity,
  Place,
  Telegram,
  ThreeDRotation,
  Twitter,
  YouTube,
  YoutubeSearchedFor,
} from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import { SvgIcon } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";

function Header() {
  return (
    <div className="flex justify-around flex-wrap m-auto gap-2 p-3 bg-gray-200">
      <div className="flex">
        <Place />
        <p className="ml-1 font-sarif">Addis Ababa, ETHIOPIA</p>
      </div>
      <div className="flex gap-4 flex-wrap">
        <Facebook fontSize="small" />
        
        <Instagram fontSize="small" />
        <YouTube fontSize="small" />
        <Telegram fontSize="small" />
      </div>
    </div>
  );
}

export default Header;

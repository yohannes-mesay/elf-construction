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

function Header() {
  return (
    <div className="flex justify-around items-center flex-wrap m-auto gap-2 p-2 bg-gray-200">
      <div className="flex">
        <Place fontSize="small" />
        <p className="ml-1 font-sarif text-sm">
          Addis Ababa, ETHIOPIA
        </p>
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

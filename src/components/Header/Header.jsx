import {
  AccessAlarm,
  LocationCity,
  Place,
  ThreeDRotation,
} from "@mui/icons-material";

function Header() {
  return (
      <div className="flex justify-around m-auto p-3 bg-gray-200">
        <div className="flex">
          <Place />
          <p className=" ml-1 font-sarif">Addis Ababa, ETHIOPIA</p>
        </div>
        <div>hellow</div>
    </div>
  );
}

export default Header;

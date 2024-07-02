import d from "../../../public/assets/images/3d.jpg";
import ayat from "../../../public/assets/images/ayat.jpg";
import ayat2 from "../../../public/assets/images/ayat2.jpg";
import ayata from "../../../public/assets/images/ayata.jpg";
import db from "../../../public/assets/images/db.jpg";
import debrebrhan from "../../../public/assets/images/debrebrhan.jpg";
import koye from "../../../public/assets/images/koye.jpg";
import structural from "../../../public/assets/images/structural.jpg";
import ayat3 from "../../../public/assets/images/ayat3.jpg";
import bole from "../../../public/assets/images/bole.jpg";

function Recent() {
  const images = [
    { src: ayat2, title: "Ayat" },
    { src: db, title: "Debrebrhan-Site-2" },
    { src: koye, title: "Koye-feche" },
    { src: ayata, title: "Ayat-site-a" },
    { src: structural, title: "Structural-design" },
    { src: d, title: "3D-model" },
    { src: bole, title: "Bole" },
  ];

  return (
    <div className="flex flex-col gap-3 items-center mt-10">
      <p className="uppercase">work of excellence</p>
      <p className="uppercase font-bold text-2xl">recent projects</p>
      <hr className="w-[60vw] self-center h-0.5 rounded-full bg-[#1c6ce4]" />
      <div className="md:grid grid-cols-3 w-[60vw]">
        <div className="relative group overflow-hidden">
          <img
            src={images[0].src}
            className="overflow-hidden transition duration-300 ease-in-out group-hover:scale-105 w-full h-full object-cover"
            alt={images[0].title}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-xl font-[kanit] tracking-wider uppercase hover:text-[#1c6ce4] font-semibold">
              {images[0].title}
            </span>
            <div className="text-black block  uppercase bg-[#1c6ce4] lg:scale-90 scale-75 md:px-2 font-extrabold py-1">
              COMMERCIAL, INTERIORS
            </div>
          </div>
        </div>
        <span className="flex flex-col">
          <div className="relative group overflow-hidden">
            <img
              src={images[1].src}
              className="overflow-hidden transition duration-300 ease-in-out group-hover:scale-105 w-full h-full object-cover"
              alt={images[1].title}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-xl font-[kanit] tracking-wider uppercase hover:text-[#1c6ce4] font-semibold">
                {images[1].title}
              </span>
              <div className="text-black block  uppercase bg-[#1c6ce4] lg:scale-90 scale-75 md:px-2 font-extrabold py-1">
                home
              </div>
            </div>
          </div>
          <div className="relative group overflow-hidden">
            <img
              src={images[2].src}
              className="overflow-hidden transition duration-300 ease-in-out group-hover:scale-105 w-full h-full object-cover"
              alt={images[2].title}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-xl font-[kanit] tracking-wider uppercase hover:text-[#1c6ce4] font-semibold">
                {images[2].title}
              </span>
              <div className="text-black block  uppercase bg-[#1c6ce4] lg:scale-90 scale-75 md:px-2 font-extrabold py-1">
                RESIDENTIAL
              </div>
            </div>
          </div>
          <div className="relative group overflow-hidden">
            <img
              src={images[3].src}
              className="overflow-hidden transition duration-300 ease-in-out group-hover:scale-105 w-full h-full object-cover"
              alt={images[3].title}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-xl font-[kanit] tracking-wider uppercase hover:text-[#1c6ce4] font-semibold">
                {images[3].title}
              </span>
              <div className="text-black block  uppercase bg-[#1c6ce4] lg:scale-90 scale-75 md:px-2 font-extrabold py-1">
                site-a
              </div>
            </div>
          </div>
        </span>
        <span className="flex flex-col">
        <div className="relative group overflow-hidden">
            <img
              src={images[4].src}
              className="overflow-hidden transition duration-300 ease-in-out group-hover:scale-105 w-full h-full object-cover"
              alt={images[4].title}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-xl font-[kanit] tracking-wider uppercase hover:text-[#1c6ce4] font-semibold">
                {images[4].title}
              </span>
              <div className="text-black block  uppercase bg-[#1c6ce4] lg:scale-90 scale-75 md:px-2 font-extrabold py-1">
                etabs   
              </div>
            </div>
          </div>
          <div className="relative group overflow-hidden">
            <img
              src={images[5].src}
              className="overflow-hidden transition duration-300 ease-in-out group-hover:scale-105 w-full h-full object-cover"
              alt={images[5].title}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-xl font-[kanit] tracking-wider uppercase hover:text-[#1c6ce4] font-semibold">
                {images[5].title}
              </span>
              <div className="text-black block  uppercase bg-[#1c6ce4] lg:scale-90 scale-75 md:px-2 font-extrabold py-1">
                3d-model
              </div>
            </div>
          </div>
          <div className="relative group overflow-hidden">
            <img
              src={images[6].src}
              className="overflow-hidden transition duration-300 ease-in-out group-hover:scale-105 w-full h-full object-cover"
              alt={images[6].title}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-xl font-[kanit] tracking-wider uppercase hover:text-[#1c6ce4] font-semibold">
                {images[6].title}
              </span>
              <div className="text-black block  uppercase bg-[#1c6ce4] lg:scale-90 scale-75 md:px-2 font-extrabold py-1">
                residential
              </div>
            </div>
          </div>
        </span>
      </div>
    </div>
  );
}

export default Recent;

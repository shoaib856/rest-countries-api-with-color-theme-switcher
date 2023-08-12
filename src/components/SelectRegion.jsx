import { useState } from "react";
import propTypes from "prop-types";

const SelectRegion = ({ selectedRegion, setSelectedRegion, data }) => {
  const [showRegions, setShowRegions] = useState(false);
  const getRegions = () => {
    const regions = [];
    data.forEach((country) => {
      if (!regions.includes(country.region)) {
        regions.push(country.region);
      }
    });
    return regions;
  };
  return (
    <div className={"relative w-52"}>
      <div
        className={
          "h-full dark:bg-dark-blue flex items-center justify-between w-full bg-white py-2 px-4 rounded shadow-xl"
        }
      >
        <button
          className={
            "flex-1 text-left font-[600] text-sm tracking-wide dark:text-white"
          }
          onClick={() => setShowRegions(!showRegions)}
        >
          {selectedRegion || "Filter by Region"}
        </button>
        {selectedRegion ? (
          <button onClick={() => setSelectedRegion(null)} className={"w-4"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={"dark:fill-white hover:!fill-[#f00]"}
              viewBox="0 0 512 512"
            >
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
            </svg>
          </button>
        ) : (
          <button
            onClick={() => setShowRegions(!showRegions)}
            className={"w-4"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={"dark:fill-white"}
              viewBox="0 0 448 512"
            >
              <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
            </svg>
          </button>
        )}
      </div>
      <div
        className={`dark:bg-dark-blue dark:text-white -mt-2.5 top-full flex flex-col py-1 rounded shadow-xl w-52 bg-white absolute 
                        ${showRegions ? "block" : "hidden"}`}
      >
        {getRegions().map((region, index) => {
          return (
            <span
              onClick={() => {
                setSelectedRegion(region);
                setShowRegions(false);
              }}
              key={index}
              className={
                "cursor-pointer dark:hover:bg-very-light-gray/25 hover:bg-dark-gray/10 p-1 pl-5 first:border-none first-letter:uppercase"
              }
            >
              {region}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default SelectRegion;

SelectRegion.propTypes = {
  selectedRegion: propTypes.string,
  setSelectedRegion: propTypes.func.isRequired,
  data: propTypes.array.isRequired,
};

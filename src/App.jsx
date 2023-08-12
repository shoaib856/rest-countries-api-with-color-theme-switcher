import Navbar from "./components/Navbar.jsx";
import countriesData from "../data.json";
import SelectRegion from "./components/SelectRegion.jsx";
import { useEffect, useState } from "react";
import CountryInList from "./components/CountryInList.jsx";
import CountryInDetail from "./components/CountryInDetail.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(
    document.body.classList.contains("dark")
  );
  const [data, setData] = useState(countriesData);
  const [region, setRegion] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [countryName, setCountryName] = useState("");
  const [language, setLanguage] = useState("en");
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("!bg-very-dark-blue-dark-mode");
      document.body.classList.remove("!bg-very-light-gray");
    } else {
      document.body.classList.add("!bg-very-light-gray");
      document.body.classList.remove("!bg-very-dark-blue-dark-mode");
    }
  }, [darkMode]);
  useEffect(() => {
    if (region) {
      setData(countriesData.filter((country) => country.region === region));
    } else {
      setData(countriesData);
    }
  }, [region]);
  useEffect(() => {
    if (countryName) {
      setData(
        countriesData.filter((country) =>
          country.name.toLowerCase().includes(countryName.toLowerCase())
        )
      );
    } else {
      setData(countriesData);
    }
  }, [countryName]);

  return (
    <div>
      <Navbar handleDarkMode={handleDarkMode} setLanguage={setLanguage} />
      <div className={"container mx-auto w-full"}>
        {selectedCountry ? (
          <CountryInDetail
            countries={countriesData}
            country={selectedCountry}
            language={language}
            setCountry={setSelectedCountry}
          />
        ) : (
          <>
            <div
              className={"w-full flex flex-wrap justify-between py-10 gap-y-6"}
            >
              <div
                className={"w-full md:w-96 relative flex items-center gap-2"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={"absolute w-4 h-4 left-6 dark:fill-white"}
                  viewBox="0 0 512 512"
                >
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg>
                <input
                  onChange={(e) => setCountryName(e.target.value)}
                  value={countryName}
                  className={
                    "w-full md:w-96 h-12 pl-14 pr-4 py-2 rounded text-dark-gray placeholder:text-dark-gray dark:text-white dark:placeholder:text-white dark:bg-dark-blue shadow-md focus:outline-none"
                  }
                  type="text"
                  name="search"
                  id="search"
                  placeholder={"Search for a country..."}
                />
              </div>
              <SelectRegion
                selectedRegion={region}
                setSelectedRegion={setRegion}
                data={data}
              />
            </div>
            <div className={"flex flex-wrap gap-[60px] pb-16"}>
              {data
                .slice()
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((country, index) => {
                  return (
                    <CountryInList
                      language={language}
                      key={index}
                      setSelectedCountry={setSelectedCountry}
                      country={country}
                    />
                  );
                })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;

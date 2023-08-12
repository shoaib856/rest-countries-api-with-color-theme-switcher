import propTypes from "prop-types";
const CountryInList = ({ country, setSelectedCountry, language }) => {
  return (
    <div
      onClick={() => setSelectedCountry(country)}
      className={
        "cursor-pointer dark:bg-dark-blue dark:text-white rounded flex mx-auto w-52 bg-white shadow flex-col gap-3"
      }
    >
      <img
        src={country.flags.png}
        alt={country.name}
        className={"rounded-t shadow-md h-32 w-full object-cover"}
      />
      <div className={"flex flex-col gap-2 p-3"}>
        <h2
          className={`font-[800] text-lg ${
            language === "fa" ? "text-right" : ""
          }`}
        >
          {country.translations[language] || country.name}
        </h2>
        <div className={"flex flex-col gap-1"}>
          <span className={"font-[600]"}>
            Population:{" "}
            <span className={"font-[400]"}>{country.population}</span>
          </span>
          <span className={"font-[600]"}>
            Region: <span className={"font-[400]"}>{country.region}</span>
          </span>
          <span className={"font-[600]"}>
            Capital: <span className={"font-[400]"}>{country.capital}</span>
          </span>
        </div>
      </div>
    </div>
  );
};
export default CountryInList;

CountryInList.propTypes = {
  country: propTypes.object.isRequired,
  setSelectedCountry: propTypes.func.isRequired,
  language: propTypes.string.isRequired,
};

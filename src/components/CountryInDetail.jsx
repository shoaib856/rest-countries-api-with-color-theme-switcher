import propTypes from "prop-types";
const CountryInDetail = ({ country, setCountry, countries, language }) => {
  const borderCountries = countries.filter((c) =>
    country.borders?.includes(c.alpha3Code)
  );

  const {
    name,
    population,
    region,
    capital,
    currencies,
    languages,
    nativeName,
    subregion,
    topLevelDomain,
    flags,
    timezones,
    callingCodes,
    independent,
  } = country;

  return (
    <div className={"py-5"}>
      <button
        type="button"
        className={
          "mb-5 flex items-center gap-2 px-4 py-2 rounded shadow-md dark:bg-dark-blue dark:text-white focus:outline-none"
        }
        onClick={() => setCountry(null)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={"w-5 h-5 mr-2 dark:fill-white"}
          viewBox="0 0 448 512"
        >
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
        </svg>
        <span className={"dark:text-white"}>Back</span>
      </button>

      <div className={"flex gap-8 max-md:gap-4 max-md:flex-col items-center"}>
        <div className="max-md:p-5 flex-1 max-w-3xl">
          <img
            src={flags.svg}
            alt="Country image"
            className={"!w-full max-h-[30rem]"}
          />
        </div>
        <div className="max-sm:px-5 p-2 dark:text-white max-w-lg w-full">
          <h1
            className={`text-2xl font-bold mb-10 ${
              language === "fa" ? "text-right" : ""
            }`}
          >
            {country.translations[language] || name} (
            {independent ? "Independent" : "Not Independent"})
          </h1>
          <div className="flex flex-col gap-10">
            <div className="flex max-md:flex-col gap-10">
              <div className="flex flex-col gap-4">
                {[nativeName, population, region, subregion, capital].map(
                  (item, i) => (
                    <p key={i} className="flex gap-1 flex-wrap">
                      <span className={"font-bold"}>
                        {
                          [
                            "Native Name",
                            "Population",
                            "Region",
                            "Sub Region",
                            "Capital",
                          ][i]
                        }
                        :
                      </span>
                      <span>{item}</span>
                    </p>
                  )
                )}
              </div>
              <div className="flex flex-col gap-4">
                {[
                  topLevelDomain,
                  currencies,
                  languages,
                  timezones,
                  callingCodes,
                ].map((item, i) => (
                  <p key={i} className="flex gap-1 flex-wrap">
                    <span className={"font-bold"}>
                      {
                        [
                          "Top Level Domain",
                          "Currencies",
                          "Languages",
                          "Timezones",
                          "Calling Codes",
                        ][i]
                      }
                      :
                    </span>
                    <span>
                      {item instanceof Array
                        ? item.map((i) => i.name || i).join(", ")
                        : item}
                    </span>
                  </p>
                ))}
              </div>
            </div>

            {borderCountries.length > 0 ? (
              <div
                className={"flex flex-wrap items-center gap-3 dark:text-white"}
              >
                <span className={"font-bold dark:text-white"}>
                  Border Countries:
                </span>
                <div className="flex gap-3 items-center flex-wrap">
                  {borderCountries.map((borderCountry) => (
                    <button
                      key={borderCountry.alpha3Code}
                      className={
                        "px-3 py-1 rounded shadow-md dark:bg-dark-blue dark:text-white focus:outline-none"
                      }
                      onClick={() => setCountry(borderCountry)}
                    >
                      {borderCountry.translations[language] ||
                        borderCountry.name}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CountryInDetail;

CountryInDetail.propTypes = {
  country: propTypes.object.isRequired,
  setCountry: propTypes.func.isRequired,
  countries: propTypes.array.isRequired,
  language: propTypes.string.isRequired,
};

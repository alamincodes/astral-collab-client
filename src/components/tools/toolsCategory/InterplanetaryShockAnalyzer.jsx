import React, { useEffect, useState } from "react";
import Loader from "../../shared/Loader";

const CoronalMassAnalyzer = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");
  const [catalog, setCatalog] = useState("");
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const startDate = form.startDate.value;
    const endDate = form.endDate.value;
    const catalog = form.catalog.value;

    const apiKey = "FcfM0B8IyUplSo3veGSOq5P6FKgm2ROW8wBNwzh2";

    const info = {
      startDate,
      endDate,
      location,
      catalog,
    };

    const URL = `https://api.nasa.gov/DONKI/IPS?startDate=${startDate}&endDate=${endDate}&location=${location}&catalog=${catalog}&api_key=${apiKey}`;
    setIsLoading(true);
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setResult(data);
        setIsLoading(false);
      });
  };

  return (
    <section className="px-10 py-5 overflow-y-scroll scrollbar">
      <header>
        {/* search port */}
        <div className="bg-white shadow rounded-xl overflow-hidden">
          <div className="bg-primary text-white text-xl font-bold p-4">
            <h2>Interplanetary Shock Analyzer</h2>
          </div>
          {/* inputs */}

          <form className="p-4" onSubmit={handleSubmit}>
            <div className="flex items-center space-x-7">
              {/* start date */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold">Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  className="bg-white rounded-lg border border-neutral-400 placeholder-neutral-500 placeholder:text-xs placeholder:font-bold outline-none py-2 px-4 w-full"
                />
              </div>
              {/* end date */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold">End Date</label>
                <input
                  type="date"
                  name="endDate"
                  className="bg-white rounded-lg border border-neutral-400 placeholder-neutral-500 placeholder:text-xs placeholder:font-bold outline-none py-2 px-4 w-full"
                />
              </div>
              {/* Location */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold">Location</label>
                <select
                  name="location"
                  className="bg-white rounded-lg font-bold border border-neutral-400 placeholder-neutral-500 placeholder:text-xs placeholder:font-bold outline-none py-2 px-4 w-full"
                >
                  <option value="Earth" className="font-medium">
                    Earth
                  </option>
                  <option value="MESSENGER" className="font-medium">
                    MESSENGER
                  </option>
                  <option value="STEREO A" className="font-medium">
                    STEREO A
                  </option>
                  <option value="STEREO B" className="font-medium">
                    STEREO B
                  </option>
                </select>
              </div>

              {/* catalog */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold">Catalog</label>
                <select
                  name="catalog"
                  className="bg-white rounded-lg font-bold border border-neutral-400 placeholder-neutral-500 placeholder:text-xs placeholder:font-bold outline-none py-2 px-4 w-full"
                >
                  <option value="all" className="font-medium">
                    ALL
                  </option>
                  <option value="SWRC_CATALOG" className="font-medium">
                    SWRC CATALOG
                  </option>
                  <option value="JANG_ET_AL_CATALOG" className="font-medium">
                    JANG ET AL CATALOG
                  </option>
                </select>
              </div>
            </div>

            {/* search button */}
            <div className="mt-5">
              <button
                type="submit"
                className="px-10 py-3 bg-primary rounded-lg text-white font-bold"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </header>

      {isLoading && <Loader />}
      {/* result */}
      {result?.length > 1 && (
        <div className="bg-white shadow rounded-xl overflow-hidden mt-5">
          <div className="bg-primary text-white text-xl font-bold p-4">
            <h2>Result</h2>
          </div>

          <div className="h-[450px] overflow-y-scroll scrollbar">
            {/* result card */}
            {result.map((item, index) => {
              return (
                <div className="">
                  <table className="overflow-hidden rounded-lg bg-white shadow-md text-sm w-full">
                    <tbody>
                      <tr className="border-b">
                        <td className="px-6 py-3">
                          <h2 className="text-xl font-bold">
                            Result {index + 1}
                          </h2>
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="whitespace-nowrap px-6 py-3 text-left">
                          Time
                        </td>
                        <td className="whitespace-nowrap px-6 py-3 text-left">
                          {item.time21_5}
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="whitespace-nowrap px-6 py-3 text-left">
                          Latitude
                        </td>
                        <td className="whitespace-nowrap px-6 py-3 text-left">
                          {item.latitude}
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="whitespace-nowrap px-6 py-3 text-left">
                          Longitude
                        </td>
                        <td className="whitespace-nowrap px-6 py-3 text-left">
                          {item.longitude}
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="whitespace-nowrap px-6 py-3 text-left">
                          Speed
                        </td>
                        <td className="whitespace-nowrap px-6 py-3 text-left">
                          {item.speed}
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="whitespace-nowrap px-6 py-3 text-left">
                          HalfAngle
                        </td>
                        <td className="whitespace-nowrap px-6 py-3 text-left">
                          {item.halfAngle}
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="whitespace-nowrap px-6 py-3 text-left">
                          Most Accurate:
                        </td>
                        <td className="whitespace-nowrap px-6 py-3 text-left">
                          {item.halfAngle}
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="whitespace-nowrap px-6 py-3 text-left">
                          Catalog:
                        </td>
                        <td className="whitespace-nowrap px-6 py-3 text-left">
                          {item.catalog}
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="whitespace-nowrap px-6 py-3 text-left">
                          Link:
                        </td>
                        <td className="whitespace-nowrap px-6 py-3 text-left">
                          <a
                            target="_blank"
                            className="underline font-bold text-blue-600"
                            href={item.link}
                          >
                            Click
                          </a>
                        </td>
                      </tr>
                      <tr className="border-b max-w-6xl">
                        <td className="whitespace-nowrap px-6 py-3 text-left">
                          {item?.note?.length > 25
                            ? item.note.substr(0, 25) + "... See more"
                            : item.note}
                        </td>
                      </tr>
                      {/* Add more rows as needed */}
                    </tbody>
                  </table>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default CoronalMassAnalyzer;

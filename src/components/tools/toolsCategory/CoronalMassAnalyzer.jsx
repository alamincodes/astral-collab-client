import React, { useState } from "react";

const CoronalMassAnalyzer = () => {
  const [mostAccurate, setMostAccurate] = useState(true);
  const [coronalMass, setCoronalMass] = useState([]);
  // console.log(mostAccurate);
  const handleCheckboxChange = () => {
    // Update the state when the checkbox is clicked
    setMostAccurate(!mostAccurate);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const startDate = form.startDate.value;
    const endDate = form.endDate.value;
    const speed = form.speed.value;
    const halfAngle = form.halfAngle.value;
    const catalog = form.catalog.value;
    const mostAccurateOnly = mostAccurate;
    const info = {
      startDate,
      endDate,
      speed,
      halfAngle,
      catalog,
      mostAccurateOnly,
    };
    console.log(info);

    const URL = `https://api.nasa.gov/DONKI/CMEAnalysis?startDate=${startDate}&endDate=${endDate}&mostAccurateOnly=${mostAccurate}&speed=${speed}&halfAngle=${halfAngle}&catalog=${catalog}&api_key=8e9gPsuHf2BhIzahsmUcZzUdqP7rWFLM6wLnP8jc`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCoronalMass(data);
      });
  };

  return (
    <section className="px-10 py-5 overflow-y-scroll scrollbar">
      <header>
        {/* search port */}
        <div className="bg-white shadow rounded-xl overflow-hidden">
          <div className="bg-primary text-white text-xl font-bold p-4">
            <h2>Coronal Mass Ejection (CME) Analyser</h2>
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
                <label className="text-sm font-semibold">Start Date</label>
                <input
                  type="date"
                  name="endDate"
                  className="bg-white rounded-lg border border-neutral-400 placeholder-neutral-500 placeholder:text-xs placeholder:font-bold outline-none py-2 px-4 w-full"
                />
              </div>
              {/* speed */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold">Speed</label>
                <input
                  type="number"
                  name="speed"
                  placeholder="Lower limit"
                  className="bg-white rounded-lg border border-neutral-400 placeholder-neutral-500 placeholder:text-xs placeholder:font-bold outline-none py-2 px-4 w-full"
                />
              </div>
              {/* half angle */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold">Half angle</label>
                <input
                  type="number"
                  name="halfAngle"
                  placeholder="Lower limit"
                  className="bg-white rounded-lg border border-neutral-400 placeholder-neutral-500 placeholder:text-xs placeholder:font-bold outline-none py-2 px-4 w-full"
                />
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
            {/* checkbox */}
            <div className="mt-5">
              <label className="flex items-center space-x-1">
                <input
                  type="checkbox"
                  className="accent-primary w-5 h-5"
                  checked={mostAccurate}
                  onChange={handleCheckboxChange}
                />{" "}
                <span className="text-sm font-medium">Most Accurate Only</span>
              </label>
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

      {/* result */}

      <div className="bg-white shadow rounded-xl overflow-hidden mt-5">
        <div className="bg-primary text-white text-xl font-bold p-4">
          <h2>Result</h2>
        </div>

        <div className="h-[450px] overflow-y-scroll scrollbar">
          {/* result card */}
          {coronalMass.map((item) => {
            return (
              <div
                key={item.speed}
                className="bg-neutral-100 m-4 p-4 rounded-lg"
              >
                <div>
                  <h2 className="text-sm">
                    <span className="font-bold ">Time: </span> {item.time21_5}
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoronalMassAnalyzer;

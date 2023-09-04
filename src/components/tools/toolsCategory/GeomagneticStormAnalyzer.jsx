import React, { useState } from "react";
import { BarChart, Legend, XAxis, YAxis, Bar, Tooltip } from "recharts";
import Loader from "../../shared/Loader";

const GeomagneticStormAnalyzer = () => {
  const [gstData, setGstData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const startDate = form.startDate.value;
    const endDate = form.endDate.value;

    const URL = `https://api.nasa.gov/DONKI/GST?startDate=${startDate}&endDate=${endDate}&api_key=8e9gPsuHf2BhIzahsmUcZzUdqP7rWFLM6wLnP8jc`;
    setIsLoading(true);
    setGstData("");
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGstData(data);
        setIsLoading(false);
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
                  defaultValue="2023-01-01"
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
            </div>
            {/* search button */}
            <div className="mt-5">
              <button type="submit" className="px-10 py-3 bg-primary rounded-lg text-white font-bold">
                Search
              </button>
            </div>
          </form>
        </div>
      </header>

      {isLoading && <Loader />}

      {/* result */}
      {gstData.length > 1 && (
        <div className="bg-white shadow rounded-xl overflow-hidden mt-5">
          <div className="bg-primary text-white text-xl font-bold p-4">
            <h2>Result</h2>
          </div>

          <div className="h-[525px] overflow-y-scroll scrollbar ">
            {/* result card */}
            {gstData.map((item) => {
              const barData = [];
              item.allKpIndex.map((idx) => {
                let tmp = {};
                tmp.name = idx.observedTime;
                tmp.kpIndex = idx.kpIndex;
                barData.push(tmp);
              });

              return (
                <div key={item.speed} className="bg-neutral-100 m-4 p-4 rounded-lg grid grid-cols-3 font-medium">
                  <div className="col-span-1">
                    <h2 className="">
                      <span className="font-bold ">All KP Index </span>
                    </h2>

                    <BarChart
                      width={500}
                      height={300}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                      data={barData}
                    >
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="kpIndex" fill="#8884d8" />
                    </BarChart>

                    <h2 className="text-sm">
                      <span className="font-bold ">GST ID: </span> {item.gstID}
                    </h2>
                    <h2 className="text-sm">
                      <span className="font-bold ">Start Time: </span> {item.startTime}
                    </h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default GeomagneticStormAnalyzer;

import React, { useState } from "react";
import { BarChart, Legend, XAxis, YAxis, Bar, Tooltip } from "recharts";
import Loader from "../../shared/Loader";
import AnimatePage from "../../shared/AnimatePage";

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
    <AnimatePage>
      <section className="px-10 py-5 overflow-y-scroll scrollbar">
        <header>
          {/* search port */}
          <div className="bg-white shadow rounded-xl overflow-hidden">
            <div className="bg-primary text-white text-xl font-bold p-4">
              <h2>Geomagnetic Storm Analyzer</h2>
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
        {gstData.length > 1 && (
          <AnimatePage>
            <div className="bg-white shadow rounded-xl overflow-hidden mt-5">
              <div className="bg-primary text-white text-xl font-bold p-4">
                <h2>Results</h2>
              </div>

              <div className="h-[525px] overflow-y-scroll">
                {/* result card */}
                {gstData.map((item, index) => {
                  const barData = [];
                  item.allKpIndex.map((idx) => {
                    let tmp = {};
                    tmp.name = idx.observedTime;
                    tmp.kpIndex = idx.kpIndex;
                    barData.push(tmp);
                  });
                  let activityList = [];
                  item.linkedEvents.map((i) => activityList.push(i.activityID));
                  let activityStr = activityList.join(", ");
                  return (
                    <div
                      key={item.link}
                      className="bg-neutral-100 m-4 p-4 rounded-lg font-medium grid grid-cols-2 gap-5"
                    >
                      <div className="col-span-1 h-full ">
                        <table className="rounded-lg bg-white shadow text-sm h-full w-full">
                          <tbody>
                            <tr className="border-b">
                              <td className="px-6 text-xl font-bold">
                                Result {index + 1}{" "}
                                {/* <h5 className="text-xl font-bold ml-2"></h5> */}
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="px-6 py-1 text-left">GstID</td>
                              <td className="px-6 py-1 text-left">
                                {item.gstID}
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="px-6 py-1 text-left">
                                Start Time
                              </td>
                              <td className="px-6 py-1 text-left">
                                {item.startTime}
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="px-6 py-1 text-left">
                                Linked Events
                              </td>
                              <td className="px-6 py-1 text-left">
                                {activityStr}
                              </td>
                            </tr>
                            <tr className="border-b">
                              <td className="whitespace-nowrap px-6 py-1 text-left">
                                Link:
                              </td>
                              <td className="whitespace-nowrap px-6 py-1 text-left">
                                <a
                                  target="_blank"
                                  className="underline font-bold text-blue-600"
                                  href={item.link}
                                >
                                  Click
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="col-span-1 shadow bg-white p-2 rounded-lg ">
                        <h2 className="px-6 text-xl py-2">
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
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimatePage>
        )}
      </section>
    </AnimatePage>
  );
};

export default GeomagneticStormAnalyzer;

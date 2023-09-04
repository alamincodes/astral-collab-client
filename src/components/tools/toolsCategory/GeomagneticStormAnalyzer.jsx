import React from "react";
import { BarChart, Legend, XAxis, YAxis, Bar, Tooltip } from "recharts";

const GeomagneticStormAnalyzer = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
    },
  ];
  return (
    <section className="px-10 py-5 overflow-y-scroll scrollbar">
      <header>
        {/* search port */}
        <div className="bg-white shadow rounded-xl overflow-hidden">
          <div className="bg-primary text-white text-xl font-bold p-4">
            <h2>Geomagnetic Storm Analyzer</h2>
          </div>
          {/* inputs */}

          <form className="p-4">
            <div className="flex items-center space-x-7">
              {/* start date */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold">Start Date</label>
                <input
                  type="date"
                  name=""
                  className="bg-white rounded-lg border border-neutral-400 placeholder-neutral-500 placeholder:text-xs placeholder:font-bold outline-none py-2 px-4 w-full"
                />
              </div>
              {/* end date */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold">Start Date</label>
                <input
                  type="date"
                  name=""
                  className="bg-white rounded-lg border border-neutral-400 placeholder-neutral-500 placeholder:text-xs placeholder:font-bold outline-none py-2 px-4 w-full"
                />
              </div>
              {/* Label */}
              <div className="flex flex-col">
                <label className="text-sm font-semibold">Label</label>
                <input
                  type="text"
                  name=""
                  placeholder="Enter a text"
                  className="bg-white rounded-lg border border-neutral-400 placeholder-neutral-500 placeholder:text-xs placeholder:font-bold outline-none py-2 px-4 w-full"
                />
              </div>
            </div>
            {/* checkbox */}
            <div className="mt-5 flex items-center space-x-5">
              <label className="flex items-center space-x-1">
                <input
                  type="checkbox"
                  className="accent-primary w-5 h-5"
                  defaultChecked
                />{" "}
                <span className="text-sm font-medium">Most Accurate Only</span>
              </label>
              <label className="flex items-center space-x-1">
                <input
                  type="checkbox"
                  className="accent-primary w-5 h-5"
                  defaultChecked
                />{" "}
                <span className="text-sm font-medium">Complete Entry Only</span>
              </label>
            </div>
            {/* search button */}
            <div className="mt-5">
              <button className="px-10 py-3 bg-primary rounded-lg text-white font-bold">
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
          <div className="bg-neutral-100 m-4 p-4 rounded-lg">
            <BarChart width={730} height={250} data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeomagneticStormAnalyzer;

import React from "react";

const InterplanetaryShockAnalyzer = () => {
  return (
    <section className="px-10 py-5 overflow-y-scroll scrollbar">
      <header>
        {/* search port */}
        <div className="bg-white shadow rounded-xl overflow-hidden">
          <div className="bg-primary text-white text-xl font-bold p-4">
            <h2>Interplanetary Shock Analyzer</h2>
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
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
              ratione officiis soluta omnis dolorum ea fugiat, eligendi ipsa aut
              reiciendis nulla quas sint voluptatibus ipsam earum! Iusto
              cupiditate, fugiat exercitationem, architecto vitae cumque,
              voluptas quae asperiores fuga beatae adipisci quidem reiciendis.
              Nemo reprehenderit maiores cum obcaecati dolore esse cupiditate
              consequatur voluptate molestias ullam quis, magnam facere, quae
              modi. Optio voluptatibus exercitationem sit quam asperiores magnam
              vel nihil reiciendis explicabo! In fugit ipsa qui odio, et quas a
              quia molestias sint dignissimos ad debitis fugiat voluptates
              provident, modi natus. Laborum deserunt saepe officia
              exercitationem aut adipisci magni consequatur, consectetur sequi!
              Mollitia sunt, omnis, porro odio at doloremque in itaque placeat
              quidem ex ea possimus blanditiis voluptates quaerat
              exercitationem? Tempore odio ad maiores autem quos. Sequi velit
              perspiciatis dolorum asperiores facere veritatis perferendis
              voluptatum amet suscipit, iure placeat illo. Dolor vero cum
              numquam nihil quam, alias consectetur nulla, eaque dicta provident
              repellendus hic similique beatae officia culpa sint exercitationem
              nam facere in necessitatibus expedita consequatur reiciendis ea
              ipsa! Ea aperiam culpa debitis perspiciatis ipsam dolores, dolore
              corrupti, numquam nam laborum, expedita illo. Quasi amet illum
              asperiores porro, ullam harum sed aliquam adipisci cumque est sunt
              distinctio obcaecati magni nesciunt alias quae reiciendis!
            </p>
          </div>
          <div className="bg-neutral-100 m-4 p-4 rounded-lg">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
              ratione officiis soluta omnis dolorum ea fugiat, eligendi ipsa aut
              reiciendis nulla quas sint voluptatibus ipsam earum! Iusto
              cupiditate, fugiat exercitationem, architecto vitae cumque,
              voluptas quae asperiores fuga beatae adipisci quidem reiciendis.
              Nemo reprehenderit maiores cum obcaecati dolore esse cupiditate
              consequatur voluptate molestias ullam quis, magnam facere, quae
              modi. Optio voluptatibus exercitationem sit quam asperiores magnam
              vel nihil reiciendis explicabo! In fugit ipsa qui odio, et quas a
              quia molestias sint dignissimos ad debitis fugiat voluptates
              provident, modi natus. Laborum deserunt saepe officia
              exercitationem aut adipisci magni consequatur, consectetur sequi!
              Mollitia sunt, omnis, porro odio at doloremque in itaque placeat
              quidem ex ea possimus blanditiis voluptates quaerat
              exercitationem? Tempore odio ad maiores autem quos. Sequi velit
              perspiciatis dolorum asperiores facere veritatis perferendis
              voluptatum amet suscipit, iure placeat illo. Dolor vero cum
              numquam nihil quam, alias consectetur nulla, eaque dicta provident
              repellendus hic similique beatae officia culpa sint exercitationem
              nam facere in necessitatibus expedita consequatur reiciendis ea
              ipsa! Ea aperiam culpa debitis perspiciatis ipsam dolores, dolore
              corrupti, numquam nam laborum, expedita illo. Quasi amet illum
              asperiores porro, ullam harum sed aliquam adipisci cumque est sunt
              distinctio obcaecati magni nesciunt alias quae reiciendis!
            </p>
          </div>
          <div className="bg-neutral-100 m-4 p-4 rounded-lg">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
              ratione officiis soluta omnis dolorum ea fugiat, eligendi ipsa aut
              reiciendis nulla quas sint voluptatibus ipsam earum! Iusto
              cupiditate, fugiat exercitationem, architecto vitae cumque,
              voluptas quae asperiores fuga beatae adipisci quidem reiciendis.
              Nemo reprehenderit maiores cum obcaecati dolore esse cupiditate
              consequatur voluptate molestias ullam quis, magnam facere, quae
              modi. Optio voluptatibus exercitationem sit quam asperiores magnam
              vel nihil reiciendis explicabo! In fugit ipsa qui odio, et quas a
              quia molestias sint dignissimos ad debitis fugiat voluptates
              provident, modi natus. Laborum deserunt saepe officia
              exercitationem aut adipisci magni consequatur, consectetur sequi!
              Mollitia sunt, omnis, porro odio at doloremque in itaque placeat
              quidem ex ea possimus blanditiis voluptates quaerat
              exercitationem? Tempore odio ad maiores autem quos. Sequi velit
              perspiciatis dolorum asperiores facere veritatis perferendis
              voluptatum amet suscipit, iure placeat illo. Dolor vero cum
              numquam nihil quam, alias consectetur nulla, eaque dicta provident
              repellendus hic similique beatae officia culpa sint exercitationem
              nam facere in necessitatibus expedita consequatur reiciendis ea
              ipsa! Ea aperiam culpa debitis perspiciatis ipsam dolores, dolore
              corrupti, numquam nam laborum, expedita illo. Quasi amet illum
              asperiores porro, ullam harum sed aliquam adipisci cumque est sunt
              distinctio obcaecati magni nesciunt alias quae reiciendis!
            </p>
          </div>
          <div className="bg-neutral-100 m-4 p-4 rounded-lg">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
              ratione officiis soluta omnis dolorum ea fugiat, eligendi ipsa aut
              reiciendis nulla quas sint voluptatibus ipsam earum! Iusto
              cupiditate, fugiat exercitationem, architecto vitae cumque,
              voluptas quae asperiores fuga beatae adipisci quidem reiciendis.
              Nemo reprehenderit maiores cum obcaecati dolore esse cupiditate
              consequatur voluptate molestias ullam quis, magnam facere, quae
              modi. Optio voluptatibus exercitationem sit quam asperiores magnam
              vel nihil reiciendis explicabo! In fugit ipsa qui odio, et quas a
              quia molestias sint dignissimos ad debitis fugiat voluptates
              provident, modi natus. Laborum deserunt saepe officia
              exercitationem aut adipisci magni consequatur, consectetur sequi!
              Mollitia sunt, omnis, porro odio at doloremque in itaque placeat
              quidem ex ea possimus blanditiis voluptates quaerat
              exercitationem? Tempore odio ad maiores autem quos. Sequi velit
              perspiciatis dolorum asperiores facere veritatis perferendis
              voluptatum amet suscipit, iure placeat illo. Dolor vero cum
              numquam nihil quam, alias consectetur nulla, eaque dicta provident
              repellendus hic similique beatae officia culpa sint exercitationem
              nam facere in necessitatibus expedita consequatur reiciendis ea
              ipsa! Ea aperiam culpa debitis perspiciatis ipsam dolores, dolore
              corrupti, numquam nam laborum, expedita illo. Quasi amet illum
              asperiores porro, ullam harum sed aliquam adipisci cumque est sunt
              distinctio obcaecati magni nesciunt alias quae reiciendis!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterplanetaryShockAnalyzer;

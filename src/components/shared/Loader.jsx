import React from "react";
import { motion } from "framer-motion";
import { useLottie } from "lottie-react";
import SpaceLoaderAnim from "./SpaceLoader.json";

const Loader = () => {
  const options = {
    animationData: SpaceLoaderAnim,
    loop: true,
  };

  const { View } = useLottie(options);
  return (
    <div className="flex justify-center items-center h-[500px]">
      <div className="w-[300px]">{View}</div>
      {/* <div className="planet"></div> */}
    </div>
  );
};

export default Loader;

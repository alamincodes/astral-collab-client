import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import HomeIndex from "../home/HomeIndex";
import ToolsIndex from "../tools/ToolsIndex";
import CoronalMassAnalyzer from "../tools/toolsCategory/CoronalMassAnalyzer";
import InterplanetaryShockAnalyzer from "../tools/toolsCategory/InterplanetaryShockAnalyzer";
import GeomagneticStormAnalyzer from "../tools/toolsCategory/GeomagneticStormAnalyzer";
import MentorHub from "../mentorHub/MentorHub";
import ResearchSpace from "../researchSpace/ResearchSpace";

export const routes = createBrowserRouter([
  {
    element: <Main />,
    children: [
      {
        path: "/",
        element: <HomeIndex />,
      },
      {
        path: "/mentorHub",
        element: <MentorHub />,
      },
      {
        path: "/researchSpace",
        element: <ResearchSpace />,
      },
      {
        path: "/tools",
        element: <ToolsIndex />,
        children: [
          {
            path: "/tools/coronal-mass-analyzer",
            element: <CoronalMassAnalyzer />,
          },
          {
            path: "/tools/interplanetary-shock-analyzer",
            element: <InterplanetaryShockAnalyzer />,
          },
          {
            path: "/tools/geomagnetic-storm-analyzer",
            element: <GeomagneticStormAnalyzer />,
          },
        ],
      },
    ],
  },
]);

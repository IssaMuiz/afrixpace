import LeftSidebar from "../LeftSidebar";
import RightSidebar from "../RightSidebar";
import Navbar from "../Navbar";
import Feed from "../Feed";
import { useState } from "react";
useState;

const Home = () => {
  const [displaySidenav, SetdisplaySidenav] = useState(false);

  const toggleDisplaynav = () => {
    SetdisplaySidenav(true);
  };

  return (
    <div className="h-[2000px]">
      <Navbar toggleDisplaynav={toggleDisplaynav} />
      <div className="flex">
        <LeftSidebar displaySidenav={displaySidenav} />
        <Feed />
        <RightSidebar />
      </div>
    </div>
  );
};

export default Home;
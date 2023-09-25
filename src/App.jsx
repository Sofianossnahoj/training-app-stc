import GymSchedule from "./views/gymSchedule/GymSchedule";
import OurGyms from "./views/ourGyms/OurGyms";
import Navigation from "@/components/shared/navigation/Navigation";

import { Route, Routes } from "react-router-dom";

import "./style/main.sass";

const App = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<OurGyms />} />
          <Route path="/:id" element={<GymSchedule />} />
          <Route path="*" element={<OurGyms />} />
        </Routes>
      </main>
    </>
  );
};

export default App;

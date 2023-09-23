import "./style/main.sass";
import GymSchedule from "./views/gymSchedule/GymSchedule";
import OurGyms from "./views/ourGyms/OurGyms";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<OurGyms />} />
      <Route path="/:id" element={<GymSchedule />} />
      <Route path="*" element={<OurGyms />} />
    </Routes>
  );
};

export default App;

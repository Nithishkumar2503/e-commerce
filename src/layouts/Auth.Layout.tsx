import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/index.pages";

function mainlayout() {
  return (
    <>
      <div className="h-screen w-screen overflow-hidden">
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/home" Component={HomePage} />
        </Routes>
      </div>
    </>
  );
}

export default mainlayout;

import { Routes, BrowserRouter, Route } from "react-router-dom";
import { LandingPage } from "./pages/index.pages";
import { Signin, Signup } from "./pages/(auth)/index.pages.auth";
import { Home } from "./pages/(private)/index.pages.private";
import ProtectedRoute from "./routes/Protected.route";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="w-screen h-screen text-black">
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/home"
              element={<ProtectedRoute children={<Home />}></ProtectedRoute>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Resume from "./pages/Resume";

function App() {
  return (
    <div className="App">
        <React.Fragment>
          <Router>
            <Navbar />
            <Routes>
              <Route exact path='/' element={<Homepage />} />
              <Route exact path='/resume' element={<Resume />} />
            </Routes>
          </Router>
        </React.Fragment>
        {/* <React.Fragment>
          <Router>
            <Navbar />
            <Routes>
              <Route exact path='/' element={<LandingPage />} />
              <Route exact path='/game-store' element={<GameStore />} />
              <Route exact path='/peripherals' element={<Peripherals />} />
            </Routes>
            <Footer />
          </Router>
        </React.Fragment> */}
    </div>
  );
}

export default App;

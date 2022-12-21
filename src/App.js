import React from "react";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import Detail from "./components/movie/Detail";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="bg-[#0c111b] w-full overflow-hidden">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/detail" element={<Detail />} />
                    <Route path="/subscribe" element={<Subscribe />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;

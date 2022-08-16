import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import Homepage from "./Home";
import About from "./About";
import Addbusiness from "./addbusiness";
import Businesspage from "./Businesspage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/addbusiness" element={<Addbusiness />} />
                        <Route
                            path="/Businesspage"
                            element={<Businesspage />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

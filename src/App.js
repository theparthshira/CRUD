import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import Students from "./components/Students";
import Departments from "./components/Departments";

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar />
                <div>
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/students" element={<Students />} />
                        <Route path="/departments" element={<Departments />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;

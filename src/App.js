import './App.css';
import Navbar from "./components/Navbar";
import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";
import Home from "./components/Home";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <div className={"container"}>
                    <Routes>
                        <Route path={"/"} element={<Home/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;

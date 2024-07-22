import { BrowserRouter, Route, Routes as RouterRoutes } from "react-router-dom";
import Orders from "./Orders";
import Home from "./Home";
import Navbar from "./Navbar";

function Routes() {
    return (
        <BrowserRouter>
            <Navbar/>
            <RouterRoutes>
                <Route path="/orders" element={<Orders />} />
                <Route path="/" element={<Home />} />
            </RouterRoutes>
        </BrowserRouter>
    );
}

export default Routes;

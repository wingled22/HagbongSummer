import { Route, Routes } from "react-router-dom";
import Clients from "./Clients";
import OtherPage from "./OtherPage";
import PageNotFound from "./PageNotFound";
import ViewClient from "./ViewClient";

const AppRoutes = () => {
    const val = "sdfsd"
    return (
        <Routes>
            <Route path="/" element={<Clients />} />
            <Route path="/about-us" element={<OtherPage />} />
            <Route path="/client/:clientId" element={<ViewClient />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
}

export default AppRoutes;
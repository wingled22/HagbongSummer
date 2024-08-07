import { Routes, Route, Outlet } from "react-router-dom";
import Clients from "./Clients";
import OtherPage from "./OtherPage";
import PageNotFound from "./PageNotFound";
import ViewClient from "./ViewClient.jsx";

const AppRoutes = () => {
    return ( 
        <Routes>
            <Route path="/" element={<Clients/>}/>
            <Route path="/client/:clientId" element={<ViewClient/>}/>
            <Route path="/page2" element={<OtherPage/>}/>
            <Route path="*" element={<PageNotFound/>}/>

        </Routes>
    );
}
 
export default AppRoutes ;
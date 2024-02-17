import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import MainPage from "../mainPage/MainPage";
import AlbumsList from "../albums/AlbumsList";
import Channels from "../channels/Channels";
import { A1S1, A1S10, A1S2, A1S3, A1S4, A1S5, A1S6, A1S7, A1S8, A1S9 } from "../albums/albumsList/album1/A1Songs";
import { A3S1, A3S2, A3S3, A3S4, A3S5, A3S6, A3S7, A3S8, A3S9 } from "../albums/albumsList/album3/A3Songs";

const RoutesList = () => {
    return (
        <div>
            <Routes>
                <Route path='/albums' element={<AlbumsList />} />
                <Route path='/channels' element={<Channels />} />
                <Route path='/' element={<MainPage />} />
                {/* Song Routes -- Album1 */}
                <Route path='/album1/1' element={<A1S1 />} />
                <Route path='/album1/2' element={<A1S2 />} />
                <Route path='/album1/3' element={<A1S3 />} />
                <Route path='/album1/4' element={<A1S4 />} />
                <Route path='/album1/5' element={<A1S5 />} />
                <Route path='/album1/6' element={<A1S6 />} />
                <Route path='/album1/7' element={<A1S7 />} />
                <Route path='/album1/8' element={<A1S8 />} />
                <Route path='/album1/9' element={<A1S9 />} />
                <Route path='/album1/10' element={<A1S10 />} />
                {/* Song Routes -- Album3 */}
                <Route path='/album3/1' element={<A3S1 />} />
                <Route path='/album3/2' element={<A3S2 />} />
                <Route path='/album3/3' element={<A3S3 />} />
                <Route path='/album3/4' element={<A3S4 />} />
                <Route path='/album3/5' element={<A3S5 />} />
                <Route path='/album3/6' element={<A3S6 />} />
                <Route path='/album3/7' element={<A3S7 />} />
                <Route path='/album3/8' element={<A3S8 />} />
                <Route path='/album3/9' element={<A3S9 />} />
            </Routes>
            <Outlet />
        </div>
    )
}

export default RoutesList;
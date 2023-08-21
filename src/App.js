import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'

import './scss/App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blank from './pages/Blank'
import Dashboard from './pages/Dashboard'
import MainLayout from './layout/MainLayout'
import Order from './pages/order'
import Place from './pages/place'
import Placeolder from './components/placeorder'
import Placedorder from './components/placedorder'
import Newstaff from './components/newstaff'
import Oldstaff from './components/oldstaff'
import RevenueByMonthsChart from './pages/Revenue'
import Music from './pages/music'
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Dashboard />} />
                    
                    <Route path="orders" element={<Place/>} >
                    <Route path="placeneworders" element={<Placeolder/>} />
                    <Route path="exitingorders" element={< Placedorder/>} />   
                    </Route>

                    <Route path="products" element={<Order  />} >
                    <Route path="newstaff" element={<Newstaff />} />
                    <Route path="oldstaff" element={<Oldstaff />} />   
                    </Route>

                    
                    <Route path="customers" element={<Blank />} />
                    <Route path="settings" element={<Music />} />
                    <Route path="stats" element={<RevenueByMonthsChart />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App

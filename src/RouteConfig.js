import React from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Men from './components/Men'
import Women from './components/Women'
import Kids from './components/Kids'
import CheckOut from './components/CheckOut'
import MenItem from './components/MenItem'
import WomenItem from './components/WomenItem'
import KidsItem from './components/KidsItem'
const RouteConfig = () => {
    return (
        <div>
            <Router>
                <NavBar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/men" element={<Men />} />
                    <Route path="/women" element={<Women />} />
                    <Route path="/kids" element={<Kids />} />
                    <Route path="/:id" element={<CheckOut />} />
                    <Route path="/men/:id" element={<MenItem />} />
                    <Route path="/women/:id" element={<WomenItem />} />
                    <Route path="/kids/:id" element={<KidsItem/>} />
                </Routes>
            </Router>
        </div>
    )
}

export default RouteConfig

import React from 'react'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import Create from './Create'

const RoutedApp = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" exact="true" element={<App />} />
                <Route path="/create" exact="true" element={<Create />}
                />
            </Routes>

        </BrowserRouter>
    )
}

export default RoutedApp
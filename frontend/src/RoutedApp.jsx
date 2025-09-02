import React from 'react'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import Create from './Create'
import SinglePost from './SinglePost'
import Update from './Update'

const RoutedApp = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" exact="true" element={<App />} />
                <Route path="/create" exact="true" element={<Create />}
                />
                <Route path="/post/:slug" exact="true" element={<SinglePost />} />
                <Route path="/post/update/:slug" exact="true" element={<Update />} />
            </Routes>

        </BrowserRouter>
    )
}

export default RoutedApp
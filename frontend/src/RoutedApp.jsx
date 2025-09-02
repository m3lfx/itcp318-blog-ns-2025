import React from 'react'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import Create from './Create'
import SinglePost from './SinglePost'
import Update from './Update'
import Login from './Login'
import PrivateRoute from './PrivateRoute'

const RoutedApp = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" exact="true" element={<App />} />


                <Route path="/create" exact="true" element={
                    <PrivateRoute redirectTo="/login" >
                        <Create />
                    </PrivateRoute>
                } />


                <Route path="/post/:slug" exact="true" element={<SinglePost />} />
                {/* <Route path="/post/update/:slug" exact="true" element={<Update />} /> */}
                
                <Route path="/post/update/:slug" exact="true" element={
                    <PrivateRoute redirectTo="/login" >
                        <Update />
                    </PrivateRoute>
                } />
                
                <Route path="/login" exact="true" element={<Login />} />
            </Routes>

        </BrowserRouter>
    )
}

export default RoutedApp
import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { getProducts, getCategories } from '../features/Product/productsSlice'

import Navbar from '../features/navbar/Navbar';

// Pages
import HomePage from '../pages/HomePage/'
import ProductsPage from '../pages/ProductsPage'
import ProductPage from '../pages/ProductPage'
import BasketPage from '../pages/BasketPage'
import UserAccountPage from '../pages/UserAccountPage'
import UserRegisterPage from '../pages/UserRegisterPage'

const App = () => { 
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts())
        dispatch(getCategories())
    }, [dispatch]);
    
    return (
        <Router>
            <Navbar loggedIn={true} />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/products' element={<ProductsPage />} />
                <Route path='/basket' element={<BasketPage />} />
                <Route path='/user' element={<UserAccountPage />} />
                <Route path='/register' element={<UserRegisterPage />} />
                <Route path='/product/:id' element={<ProductPage />} />
            </Routes>
        </Router>
    )
}

export default App
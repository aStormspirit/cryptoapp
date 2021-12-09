import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import './App.css'
import { Navbar, Exchanges, Cryptocurrencies, CryptoDetails, News, Homepage } from './components'

const App = () => {
    return (
        <div className='app'>
            <div className='navbar'>
                <Navbar />
            </div>
            <div className='main'>
                <Routes>
                    <Route exect path='/' element={<Homepage />} />
                    <Route exect path='/exchanges' element={<Exchanges />} />
                    <Route exect path='/cryptocurrencies' element={<Cryptocurrencies />} />
                    <Route exect path='/crypto/:coinId' element={<CryptoDetails />} />
                    <Route exect path='/news' element={<News />} />
                </Routes>
            </div>
            <div className='footer'>
                <Typography.Title level='{5}'>
                    Cryptoverse <br />
                    All rights reserved
                </Typography.Title>
                <Space>
                    <Link to='/'>Home</Link>
                    <Link to='/exchanges'>exchanges</Link>
                    <Link to='/'>news</Link>
                </Space>
            </div>
        </div>
    )
}

export default App

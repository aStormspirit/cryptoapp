import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom'

import { useGetCryptosQuery } from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies.jsx'
import News from './News'

const { Title } = Typography

const Homepage = () => {
    const { data, isFetching } = useGetCryptosQuery();
    const globalStats = data?.data?.stats

    if (isFetching) return 'Loading...'
    return (
        <>
            <Title level={2} className='heading'>
                <Row>
                    <Col span={12}><Statistic title='Total Cryptocurrencies' value={globalStats.total} /></Col>
                    <Col span={12}><Statistic title='Total Exchanges' value={millify(globalStats.totalExchanges)} /></Col>
                    <Col span={12}><Statistic title='Total Market Cap' value={millify(globalStats.totalMarketCap)} /></Col>
                    <Col span={12}><Statistic title='Total 24h Volume' value={millify(globalStats.total24hVolume)} /></Col>
                    <Col span={12}><Statistic title='Total Markets' value={millify(globalStats.totalMarkets)} /></Col>
                </Row>
            </Title>
            <div className='home-heading-container'>
                <Title level={2} className='home-title'>Топ 10 криптовалют в мире</Title>
                <Title level={3} className='show-more'><Link to='/cryptocurrencies'>Смотреть еще</Link></Title>
            </div>
            <Cryptocurrencies simplified />
            <div className='home-heading-container'>
                <Title level={2} className='home-title'>Последние криптоновости</Title>
                <Title level={3} className='show-more'><Link to='/cryptocurrencies'>Смотреть еще</Link></Title>
            </div>
            <News simplified />
        </>
    )
}

export default Homepage

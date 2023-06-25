import React from 'react'
import { Typography,Layout,Space } from 'antd'
import { Routes,Route,Link } from 'react-router-dom'
import './App.css'
import { Navbar,Homepage,CryptoDetails,Cryptocurrencies,News } from './components'

const App = () => {
  return (
    <div className='app'>
      <div className='navbar'>
        <Navbar/>
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route path="/" element={<Homepage/>}/>
              <Route path="/cryptocurrencies" element={<Cryptocurrencies/>}/>
              <Route path="/crypto/:coinId" element={<CryptoDetails/>}/>
              <Route path="/news" element={<News/>}/>
            </Routes>
          </div>
        </Layout>
      <div className='footer'>
        <Typography.Title level={5} style={{color:'white', textAlign:'center'}}>
          CryptoView<br/>
          All rights reserved
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
      </div>
    </div>
  )
}

export default App

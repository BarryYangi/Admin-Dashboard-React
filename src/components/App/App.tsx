import React from 'react'
import { ProSidebarProvider } from 'react-pro-sidebar'
import { Route, Routes } from 'react-router-dom'
import Login from '../Login'
import Home from '../Home'
import Toolbar from '../Toolbar'
import UserManger from '../UserManger'

const App: React.FC = () => {
  return (
    <ProSidebarProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} >
        <Route index element={<div className=' text-3xl'>Hello</div>} />
        <Route path="userManger" element={<UserManger />} />
        </Route>
      </Routes>
      <div className="fixed right-3 top-3">
        <Toolbar />
      </div>
    </ProSidebarProvider>
  )
}

export default App

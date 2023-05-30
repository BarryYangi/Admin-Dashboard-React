import React from 'react'
import { ProSidebarProvider } from 'react-pro-sidebar'
import { Route, Routes } from 'react-router-dom'
import Login from '../Login'
import Home from '../Home'
import Toolbar from '../Toolbar'
import UserManager from '../UserManger'
import MenuManager from '../MenuManager'
import Dept from '../Dept'
import Charts from '../Charts'
import ColumnCharts from '../ColumnCharts'
import PieCharts from '../PieCharts'
import RoseCharts from '../RoseChartrs'

const App: React.FC = () => {
  return (
    <ProSidebarProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} >
        <Route index element={<div className=' text-3xl'>Hello</div>} />
        <Route path="userManager" element={<UserManager />} />
        <Route path="menuManager" element={<MenuManager />} />
        <Route path="dept" element={<Dept />} />
        <Route path="charts" element={<Charts />} />
        <Route path="column" element={<ColumnCharts />} />
        <Route path="pie" element={<PieCharts />} />
        <Route path="rose" element={<RoseCharts />} />
        </Route>
      </Routes>
      <div className="fixed right-3 top-3">
        <Toolbar />
      </div>
    </ProSidebarProvider>
  )
}

export default App

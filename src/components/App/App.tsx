import React from 'react'
import { ProSidebarProvider } from 'react-pro-sidebar'
import { Route, Routes } from 'react-router-dom'
import GitHubCalendar from 'react-github-calendar'
import { AnimatePresence, motion } from 'framer-motion'
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
import APlayers from '../Aplayers'
import Calendar from '../Calendar'
import Jol from '../Jol'
import ImageComponent from '../ImageComponent'
import { homeVariants } from '@/motionSettings'

const App: React.FC = () => {
  // const location = useLocation()
  return (
    <ProSidebarProvider>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Login />} />
          <Route path="home" element={<Home />} >
            <Route index element={
              <motion.div
                className='m-4 text-3xl'
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >欢迎回来，管理员!</motion.div>
            } />
            <Route path="userManager" element={<UserManager />} />
            <Route path="menuManager" element={<MenuManager />} />
            <Route path="dept" element={<Dept />} />
            <Route path="charts" element={<Charts />} />
            <Route path="column" element={<ColumnCharts />} />
            <Route path="pie" element={<PieCharts />} />
            <Route path="rose" element={<RoseCharts />} />
            <Route path="github" element={<motion.div variants={homeVariants}
              initial="initial"
              animate="enter"
              exit="exit"
              transition={{ duration: 0.5, type: 'linear' }}><GitHubCalendar username="barryyangi" colorScheme="light" fontSize={16} /></motion.div>} />
            <Route path="nrp" element={<motion.img variants={homeVariants}
              initial="initial"
              animate="enter"
              exit="exit"
              transition={{ duration: 0.5, type: 'linear' }} src='https://netease-recent-profile-sooty.vercel.app/?id=104990211&show_percent=1&size=60&title=%E6%9C%80%E8%BF%91%E5%9C%A8%E5%90%AC&column=3&number=15' className='relative left-64' />} />
            <Route path="digu" element={<motion.iframe variants={homeVariants}
              initial="initial"
              animate="enter"
              exit="exit"
              transition={{ duration: 0.5, type: 'linear' }} src='https://digu.yct.ee/' className='h-[85vh] w-[80vw] rounded-[10px]' />} />
            <Route path="memosweb" element={<motion.iframe variants={homeVariants}
              initial="initial"
              animate="enter"
              exit="exit"
              transition={{ duration: 0.5, type: 'linear' }} src='https://memosweb.yct.ee/' className='h-[85vh] w-[80vw] rounded-[10px]' />} />
            <Route path="aplayer" element={<APlayers />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="jol" element={<Jol />} />
            <Route path="imageComponent" element={<ImageComponent imageUrl='https://img.barryi.me'/>} />
          </Route>
        </Routes>
      </AnimatePresence>
      <div className="fixed right-3 top-3">
        <Toolbar />
      </div>
    </ProSidebarProvider>
  )
}

export default App

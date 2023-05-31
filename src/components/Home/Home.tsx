import React from 'react'
import { Menu, MenuItem, Sidebar, SubMenu, useProSidebar } from 'react-pro-sidebar'
import { AppWindow, ArrowLeftCircle, ArrowRightCircle, CalendarDays, Database, Edit, Fingerprint, Wallpaper } from 'lucide-react'
import { Link, Outlet } from 'react-router-dom'

const Home: React.FC = () => {
  const { collapseSidebar, collapsed } = useProSidebar()
  function sidebarCollapse() {
    if (collapsed)
      return <ArrowRightCircle fill='pink' size="30" className='relative right-6 top-8 z-10 m-2' onClick={() => collapseSidebar()}></ArrowRightCircle>
    else
      return <ArrowLeftCircle fill='pink' size="30" className='relative right-6 top-8 z-10 m-2' onClick={() => collapseSidebar()}></ArrowLeftCircle>
  }
  return (
    <div className='flex h-screen flex-col justify-center gap-8 p-6'>
      <div className='fixed left-0 top-0 flex h-full text-black'>
        <Sidebar>
          <Menu>
            {/* <div className='m-8 inline-flex items-center text-center font-serif text-2xl font-bold'><Flower className='-ml-1 mr-8' />Barry</div> */}
            <div className='m-8 inline-flex items-center text-center font-serif text-2xl font-bold'>
              <div className="avatar right-5 h-12 w-12">
                <div className="w-24 rounded-full">
                  <img src="https://easyimage.smitten.top/i/2023/01/26/xh2qvw.jpg" />
                </div>
              </div>Barry</div>
            <Menu>
              <SubMenu defaultOpen label="系统管理" icon={<Fingerprint />}>
                <MenuItem component={<Link to="userManager" />}>用户管理</MenuItem>
                <MenuItem component={<Link to="menuManager" />}>菜单管理</MenuItem>
                <MenuItem component={<Link to="dept" />}>公司管理</MenuItem>
              </SubMenu>
              <SubMenu label="数据展示" icon={<Database />}>
                <MenuItem component={<Link to="charts" />}>总览</MenuItem>
                <MenuItem component={<Link to="column" />}>柱状图</MenuItem>
                <MenuItem component={<Link to="pie" />}>饼图</MenuItem>
                <MenuItem component={<Link to="rose" />}>玫瑰图</MenuItem>
              </SubMenu>
              <SubMenu label="小组件" icon={<AppWindow />}>
                <MenuItem component={<Link to="jol" />}>视频播放器</MenuItem>
                <MenuItem component={<Link to="aplayer" />}>音乐播放器</MenuItem>
                <MenuItem component={<Link to="github" />}>Github贡献日历</MenuItem>
                <MenuItem component={<Link to="nrp" />}>最近在听</MenuItem>
              </SubMenu>
              <SubMenu label="大日历" icon={<CalendarDays />}>
                <MenuItem component={<Link to="calendar " />}>事件日历</MenuItem>
              </SubMenu>
              <SubMenu label="Memos" icon={<Edit />}>
                <MenuItem component={<Link to="memosweb" />}>MemosWeb</MenuItem>
                <MenuItem component={<Link to="digu" />}>嘀咕日记</MenuItem>
              </SubMenu>
              <SubMenu label="弹幕墙" icon={<Wallpaper />}>
                <MenuItem> Dark</MenuItem>
                <MenuItem> Light</MenuItem>
              </SubMenu>
            </Menu>
          </Menu>
        </Sidebar>
        {sidebarCollapse()}
      </div>
      {/* <h1 className='fixed left-1/2 top-0 mt-4 font-serif text-4xl font-bold '>
          Just React Demo
        </h1> */}
      <main className='flex justify-center'>
        <div className='relative left-24 max-h-screen w-3/4'><Outlet /></div>
      </main>
    </div>
  )
}

export default Home

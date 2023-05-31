import React, { memo } from 'react'
import { Github, User } from 'lucide-react'
import { Link } from 'react-router-dom'
import ThemeChange from './ThemeChange'

const Toolbar: React.FC = () => {
  return (
    <>
      <div className="dropdown dropdown-bottom dropdown-end mr-2 text-sm">
      <label tabIndex={0} className="btn btn-ghost btn-square">
        <User />
      </label>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box w-36 p-2 shadow">
          <li><a>设置</a></li>
          <li><a>个人中心</a></li>
          <li > <Link to="/">注销</Link></li>
        </ul>
      </div>
      <ThemeChange />
      <a href='https://github.com/BarryYangi/Admin-Dashboard-React' className='btn btn-ghost btn-square'>
        <Github />
      </a>

    </>
  )
}

export default memo(Toolbar)

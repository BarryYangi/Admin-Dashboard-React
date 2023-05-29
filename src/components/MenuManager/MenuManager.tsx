import React from 'react'

const MenuManager: React.FC = () => {
  return (
    <div className=''>
      <h1 className='fixed left-1/2 top-4 m-0 p-0 text-center text-2xl'>用户管理</h1>
      <button className="btn btn-success m-4">+ 添加</button>
      <div>
        <span className='m-4'>父级菜单</span>
        <select className="select select-secondary m-2 w-full max-w-xs">
          <option disabled selected>选择一个父级菜单</option>
          <option>用户管理</option>
          <option>菜单管理</option>
          <option>公司管理</option>
        </select>
      </div>
      <div>
        <span className='m-4'>菜单名称</span>
        <input type="text" placeholder="请输入菜单名称" className="input input-bordered input-primary m-2 w-full max-w-xs" />
      </div>
      <div>
        <span className='m-4 mr-12'>图标</span>
        <input type="text" placeholder="请输入菜单图标" className="input input-bordered input-primary m-2 w-full max-w-xs" />
      </div>
      <div>
        <span className='m-4 mr-12'>URL</span>
        <input type="text" placeholder="请输入URL" className="input input-bordered input-primary m-2 w-full max-w-xs" />
      </div>
      <div>
        <span className='m-4 mr-12'>顺序</span>
        <input type="text" placeholder="请输入菜单顺序" className="input input-bordered input-primary m-2 w-full max-w-xs" />
      </div>
      <div className="mockup-window bg-base-300 absolute left-1/2 top-1/3 float-right h-1/2 w-1/3 border">
  <div className="bg-base-200 flex justify-center px-4 py-16">暂无数据</div>
</div>
    </div>
  )
}

export default MenuManager

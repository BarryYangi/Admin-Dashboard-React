import React from 'react'

const Sidebar: React.FC = () => {
  return (
<div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* <!-- Page content here --> */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
    <ul className="menu bg-base-100 text-base-content w-80 p-4">
      {/* <!-- Sidebar content here --> */}
      <li className='mb-2'><a>Sidebar Item 1</a></li>
      <li className='mb-2'><a>Sidebar Item 2</a></li>
      <li className='mb-2'><a>Sidebar Item 3</a></li>
      <li className='mb-2'><a>Sidebar Item 4</a></li>
    </ul>

  </div>
</div>
  )
}

export default Sidebar

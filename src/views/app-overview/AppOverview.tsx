import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/common/menu/Sidebar'

export default function AppOverview() {
  return (
    <>
      <Sidebar />
      <div className='content'>
        <Outlet />
      </div>
    </>
  )
}

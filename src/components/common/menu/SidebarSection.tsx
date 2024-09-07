import { ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

interface IProps {
  icon: ReactNode
  label: string
  path: string
}

export default function SidebarSection({ icon, label, path }: IProps) {
  const navigate = useNavigate()
  const location = useLocation()
  const isActive = location.pathname.includes(path)

  return (
    <div className={`sidebar-section${isActive ? ' active' : ''}`}>
      <button className={`icon-container${isActive ? ' active' : ''}`} onClick={() => navigate(path)}>
        {icon}
      </button>
      <div className='label'>{label}</div>
    </div>
  )
}

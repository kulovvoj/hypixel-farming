import { Route, Routes } from 'react-router-dom'
import { CROP_PATH, FARM_PATH } from '../../utils/consts'
import AppOverview from '../../views/app-overview/AppOverview'
import FarmSelectionPage from '../../views/farm-selection/FarmSelectionPage'
import FarmGuide from '../../views/farm-guide/FarmGuide'

export default function AppRouter() {
  return (
    <Routes>
      <Route path='/' element={<AppOverview />}>
        <Route path={CROP_PATH}>
          <Route index element={<FarmSelectionPage />} />
          <Route path={FARM_PATH} element={<FarmGuide />} />
        </Route>
      </Route>
    </Routes>
  )
}

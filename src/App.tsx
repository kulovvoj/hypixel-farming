import AppRouter from './components/app-router/AppRouter'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router basename='/'>
      <AppRouter />
    </Router>
  )
}

export default App

import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Select = lazy(() => import('./antd/Select'))

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/select" element={<Select />} />
      </Routes>
    </Suspense>
  </Router>
)

export default App

import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './layouts';

const Select = lazy(() => import('./antd/Select'));
const Bing = lazy(() => import('./Bing'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Layout>
        <Routes>
          <Route path="/select" element={<Select />} />
          <Route path="/bing" element={<Bing />} />
        </Routes>
      </Layout>
    </Suspense>
  </Router>
);

export default App;

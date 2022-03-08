import { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

import Layout from './layouts';
import { routes } from './router';

const Select = lazy(() => import('./antd/Select'));
const UseRef = lazy(() => import('./pages/react/useRef'));
const Bing = lazy(() => import('./Bing'));

const Redirect = ({ to }: { to: string }) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(to);
  });
  return null;
};

// const RenderRoute = (list: CommonType.Route[]): any =>
//   list.map((item: CommonType.Route) => {
//     const { path, component, children } = item;
//     if (!children) {
//       return <Route path={path} element={component} />;
//     }
//     return RenderRoute(children);
//   });

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Layout>
        <Routes>
          <Route path="/" element={<Redirect to="/useRef" />} />
          {/* {RenderRoute(routes)} */}
          <Route path="/useRef" element={<UseRef />} />
          <Route path="/select" element={<Select />} />
          <Route path="/bing" element={<Bing />} />
        </Routes>
      </Layout>
    </Suspense>
  </Router>
);

export default App;

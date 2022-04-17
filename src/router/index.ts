import React from 'react'

const useRef = React.lazy(() => import('../pages/react/useRef'));
const Select = React.lazy(() => import('../antd/Select'))
const LazyLoad = React.lazy(() => import('../pages/html/lazyLoad'))


export const routes = [
  {
    name: 'React',
    path: '/react',
    children: [
      {
        path: '/useRef',
        name: 'useRef',
        component: useRef
      },
    ]
  },
  {
    name: 'antd',
    path: '/antd',
    children: [
      {
        path: '/select',
        name: 'Select',
        component: Select
      },
    ]
  },
  {
    name: 'html',
    path: '/html',
    children: [
      {
        path: '/lazyLoad',
        name: 'lazyLoad',
        component: LazyLoad
      },
    ]
  }
];

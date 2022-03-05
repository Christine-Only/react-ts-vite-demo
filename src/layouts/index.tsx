import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

import { routes } from '../router';

import logo from '../assets/imgs/logo.jpeg';

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const onClick = (item: CommonType.MenuInfo) => {
    navigate(item.key);
  };
  return (
    <Layout>
      <Header className="header">
        <img src={logo} alt="logo" style={{ height: '50px', borderRadius: '50%' }} />
        <h1>Christine</h1>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['/useRef']}
            defaultOpenKeys={['/react']}
            style={{ height: '100%', borderRight: 0 }}
            onClick={onClick}
          >
            {routes.map((item) => {
              const { name, path, children: subMenuList } = item;
              return (
                <SubMenu key={path} icon={<UserOutlined />} title={name}>
                  {subMenuList.map(({ name: subName, path: subPath }) => (
                    <Menu.Item key={subPath}>{subName}</Menu.Item>
                  ))}
                </SubMenu>
              );
            })}
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default GlobalLayout;

import { Layout } from 'antd';
import React from 'react';
import SideNavigation from './components/SideNavigation/SideNavigation';
const { Header, Footer, Sider, Content } = Layout;

const App = () => (
  <>
    <Layout>
      <Sider>
        <SideNavigation />
      </Sider>
      <Layout>
        <Header >Turnip</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  </>
);

export default App;
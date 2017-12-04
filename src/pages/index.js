
import React, { Component, PropTypes } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;


class App extends React.Component {

    render(){
        return(
            <Layout className="layout">
                <div className="logo">中国诗词编年史</div>
                <Header>                   
                    <Menu
                        theme="light"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">首页asddadas</Menu.Item>
                        <Menu.Item key="2">诗人</Menu.Item>
                        <Menu.Item key="3">查询统计</Menu.Item>
                        <Menu.Item key="4">路线推荐</Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ background: '#fff', padding: 24, minHeight: 700 }}>Content</div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2016 Created by Ant UED
                 </Footer>
            </Layout>
        )
    }
}

export default App;
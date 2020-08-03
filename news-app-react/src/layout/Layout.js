import React, { Component } from 'react';
import { Layout, Menu } from 'antd';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
const { Header, Content, Footer } = Layout;

class AppLayout extends Component {
    render() {
        return (
            <>
                <Layout className="layout">
                    <Header>
                        <div className="logo" />
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1">News API</Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{ margin: '50px', padding: "50px", backgroundColor: "white", }}>
                        {
                            this.props.children
                        }
                    </Content>
                </Layout>
            </>
        );
    }
}

export default AppLayout;
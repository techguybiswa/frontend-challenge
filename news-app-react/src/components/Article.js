import React, { Component } from 'react';
import { DatePicker } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import { Button } from 'antd';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
const { Meta } = Card;
const { Search } = Input;
const { Header, Content, Footer } = Layout;

class Article extends Component {
    render() {
        const { data } = this.props;
        return (
            <>
                <Row>
                    <Col xs={0} sm={0} md={8} lg={8} xl={8}>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} xl={8} style={{ margin: "10px" }}>
                        <Card
                            style={{ width: "100%" }}
                            cover={
                                <img
                                    alt={data.title ? data.title : "Title not found"}
                                    src={data.urlToImage ? data.urlToImage : ""}
                                />
                            }
                        >
                            <Meta
                                title={data.title ? data.title : "Title not found"}
                                description={data.description ? data.description : "Description not found"}
                            />
                            <Button type="primary" href={data.url} style={{marginTop: "10px"}} block>Read Full News</Button>

                        </Card>
                    </Col>
                    <Col xs={0} sm={0} md={8} lg={8} xl={8}>
                    </Col>

                </Row>

            </>
        );
    }
}

export default Article;
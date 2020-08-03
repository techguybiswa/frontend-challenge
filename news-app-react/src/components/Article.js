import React, { Component } from 'react';
import { Card, Input, Row, Col, Button } from 'antd';
import 'antd/dist/antd.css';
const { Meta } = Card;
const { Search } = Input;

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
                                    src={data.urlToImage ? data.urlToImage : "https://miro.medium.com/max/500/0*-ouKIOsDCzVCTjK-.png"}
                                />
                            }
                        >
                            <Meta
                                title={data.title ? data.title : "Title not found"}
                                description={data.description ? data.description : "Description not found"}
                            />
                            <Button type="primary" href={data.url} style={{ marginTop: "10px" }} data-test-id="read-full-news" aria-label='View full article button'
                                block>Read Full News</Button>

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
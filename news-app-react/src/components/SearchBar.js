import React, { Component } from 'react';
import { Layout, Input, Select, Row, Col, message } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { debounceFunction } from "../utils/common.helper"
import { NEWS_SOURCE } from "../constants"
const { Option } = Select;
const { Search } = Input;

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchValue: "",
            filterValue: []
        }
    }
    setValueOfSearch = (searchValue) => {
        this.setState({
            searchValue
        })
    }
    onSearchArticle = () => {
        let searchQuery = {
            "q": this.state.searchValue,
            "domains": this.state.filterValue ? this.state.filterValue.join(",") : ""
        }
        if (this.state.searchValue.length) {
            this.props.fetchArticles(searchQuery, "search")
        } else {
            this.props.fetchArticles({ country: 'gb' }, "headlines")
        }
    }
    onChange = (filterValue) => {
        if (this.state.searchValue.length) {
            this.setState({
                filterValue
            }, () => {
                this.onSearchArticle()
                console.log(`selected ${filterValue}`);
            })
        } else {
            this.setState({
                filterValue: []
            })
            message.info("Please enter a search value first")
        }

    }
    onSearch = (val) => {
        console.log('search:', val);
    }
    debouncedSearch = debounceFunction(this.onSearchArticle, 500);

    render() {
        return (
            <>
                <Row style={{ position: "sticky", top: "10px", zIndex: "99", background: "rgba(0,0,0,.7)", padding: "20px" }}>
                    <Col xs={24} sm={24} md={18} lg={18} xl={18}>
                        <Search
                            aria-label='Search Bar'
                            placeholder="Filter news by keyword. Advanced: use quotes ('') for exact matches, and the + / - symbols for needed / excluded words."
                            onKeyUp={this.debouncedSearch}
                            data-test-id="search-news-api"
                            value={this.state.searchValue}
                            onChange={(e) => this.setValueOfSearch(e.target.value)}
                            enterButton />
                    </Col>

                    <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                        <Select
                            aria-label='Filter By Source'
                            mode="multiple"
                            data-test-id="filter-news-api"
                            showSearch
                            value={this.state.filterValue}
                            style={{ width: "100%" }}
                            placeholder="Select sources"
                            optionFilterProp="children"
                            onChange={this.onChange}
                            onSearch={this.onSearch}
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            {
                                NEWS_SOURCE.map(eachSource => (
                                    <Select.Option value={eachSource.value}>{eachSource.name}</Select.Option>
                                ))
                            }

                        </Select>
                    </Col>


                </Row>
            </>
        );
    }
}

export default SearchBar;
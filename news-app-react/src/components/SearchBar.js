import React, { Component } from 'react';
import { DatePicker } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
const { Search } = Input;
const { Header, Content, Footer } = Layout;

class SearchBar extends Component {
    render() {
        return (
            <>
                <Search placeholder="Filter news by keyword. Advanced: use quotes ('') for exact matches, and the + / - symbols for needed / excluded words." onSearch={value => console.log(value)} enterButton />
            </>
        );
    }
}

export default SearchBar;
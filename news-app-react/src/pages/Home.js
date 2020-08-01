import React, { Component } from 'react';
import { DatePicker } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
import SearchBar from "../components/SearchBar"
import Article from "../components/Article"
import { Skeleton } from 'antd';
import { Result, Button } from 'antd';

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import {BASE_URL, APP_ENV} from "../constants"

const { Header, Content, Footer } = Layout;

class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            articles: [],
            isLoading: false,
            error: null
        }
    }
    componentDidMount = () =>{
        this.fetchHeadlines()
    }
    fetchHeadlines = async () => {
        const settings = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ country: 'gb' })
        };
        try {
            this.setState({
                isLoading: true
            })
            const fetchResponse = await fetch(`${BASE_URL}${APP_ENV}/articles?type=headlines`, settings);
            const data = await fetchResponse.json();
            this.setState({
                articles: data.articles,
                isLoading: false,
            })
        } catch (e) {
            this.setState({
                error: true,
                isLoading: false,
            })
            console.log(e)
        }    
    
    }
    render() {
        return (
            <>
               <SearchBar/>
               {this.state.isLoading && 
               <Skeleton active />
               }
               {this.state.error && 
                <Result
                status="500"
                title="Error"
                subTitle="Sorry, something went wrong."
              />
               }
               {this.state.articles && 
                   this.state.articles.map(eachArticle => (
                        <Article data={eachArticle}/>
                   ))
               }
            </>
        );
    }
}

export default Home;
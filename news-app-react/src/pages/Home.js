import React, { Component } from 'react';
import { Skeleton, Result } from 'antd';
import SearchBar from "../components/SearchBar"
import Article from "../components/Article"
import 'antd/dist/antd.css';
import { BASE_URL, APP_ENV } from "../constants"

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            isLoading: false,
            error: null,
            headerText: "Top Headlines of UK"
        }
    }
    componentDidMount = () => {
        this.fetchArticles({ country: 'gb' }, "headlines")
    }
    fetchArticles = async (body, type) => {
        window.scrollTo(0, 0);
        if (type == "search") {
            this.setState({
                headerText: `Articles for ${body.q}  ${body.domains.length ? "from " + body.domains : ""}`
            })
        } else {
            this.setState({
                headerText: `Top Headlines of UK`
            })
        }
        const settings = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        };
        try {
            this.setState({
                isLoading: true,
                error: null
            })
            const fetchResponse = await fetch(`${BASE_URL}${APP_ENV}/articles?type=${type}`, settings);
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
                <h1 style={{ textAlign: "center" }}>{this.state.headerText}</h1>
                <SearchBar fetchArticles={this.fetchArticles} />
                {this.state.isLoading &&
                    <Skeleton active />
                }
                {this.state.error &&
                    <Result
                        status="500"
                        title="Error"
                        subTitle="Sorry, something went wrong. Please refresh or come back later"
                    />
                }
                {this.state.articles && !this.state.isLoading && !this.state.error &&
                    this.state.articles.map((eachArticle, index) => (
                        <React.Fragment key={index}>
                            <Article data={eachArticle} />
                        </React.Fragment>
                    ))
                }
                {
                    this.state.articles.length == 0 && !this.state.isLoading && !this.state.error && <Result
                        status="404"
                        title="No articles found"
                        subTitle="Sorry, your search query did not fetch anything."
                    />
                }
            </>
        );
    }
}

export default Home;
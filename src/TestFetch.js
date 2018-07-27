import React, {Component, Fragment} from 'react'

import Header from "./Header";

const API = 'https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=df8118601eb444068640b1e61d12270f';

class TestFetch extends Component {


    constructor(props) {
        super(props);

        this.state = {
            articles: [],
            isLoading: false,
            error: null,
        };
    }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch(API)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then(data => this.setState({articles: data.articles, isLoading: false}))
            .catch(error => this.setState({error, isLoading: false}));
    }

    render() {

        const {articles, isLoading, error} = this.state;

        if (error) {
            return <p>{error.message}</p>;
        }
        if (isLoading) {
            return <p>Loading ...</p>;
        }
        return (
            <Fragment>
                <Header/>
                <body className="backgroundlightgrey">
                <h2>Fetching News</h2>
                <p>powered by NewsAPI.org</p>
                <section>
                    {articles.map((info) => {
                        return (
                            <div className="articles" key={info.id}>
                                <div>
                                    <img className="newsimage" src={info.urlToImage} alt=""/>
                                </div>
                                <div>
                                    <div className="centerlink">
                                        <a href={info.url}>{info.title}</a>
                                    </div>
                                    <p>{info.description}</p>
                                    {/*<p>Author: {info.author}</p>*/}
                                    <p>Source: {info.source.name}</p>
                                </div>
                            </div>
                        )
                    })}
                </section>

                {/*<div className="container">*/}
                    {/*<div className="row">*/}
                        {/*<div className="col-sm-2">*/}
                            {/*{articles.map((info) => {*/}
                                {/*return (*/}
                                    {/*<div className="articles" key={info.id}>*/}
                                        {/*<div>*/}
                                            {/*<img src={info.urlToImage} alt=""/>*/}
                                            {/*<p>Author: {info.author}</p>*/}
                                            {/*<p>Source: {info.source.name}</p>*/}
                                        {/*</div>*/}
                                        {/*<div>*/}
                                            {/*<a href={info.url}>{info.title}</a>*/}
                                            {/*<p>{info.description}</p>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                {/*)*/}
                            {/*})}*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
                </body>
            </Fragment>
        );
    }
}

export default TestFetch;
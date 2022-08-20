import React, { Component } from "react";
import NewsItem from "./NewsItem";
import propTypes from "prop-types";
import Spinner from "./Spinner";

var api_key = "fcff724d07784aa2a5150583bad7cbb8"; //nemadivyansh
// let api_key = "0c6c101667df4819811538c161824dd";    // divnema


export class News extends Component {

    static defaultProps = {

        pageSize: 15,
        country: "in",
        category: "",
    }

    static propTypes = {

        pageSize: propTypes.number,
        country: propTypes.string,
    }


    constructor() {
        super();
        console.log("constructor");
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            pageNeed: '',
        mode: "light"


        }
        // console.log(this.state.pageSize);
    }

    // Neccessary functions

    async componentDidMount() {

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${api_key}&pageSize=${this.props.pageSize}`;

        this.setState({ loading: true });

        let data = await fetch(url);
        let ParsedData = await data.json();
        console.log(ParsedData.totalResults);
        let pageNeed = Math.ceil(ParsedData.totalResults / this.props.pageSize);

        this.setState({
            articles: ParsedData.articles,
            pageNeed: pageNeed,
            totalResults: ParsedData.totalResults,
            loading: false,

        })
    }

    handlePvsClick = async () => {
        console.log("pvs clicked");

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${api_key}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;

        this.setState({ loading: true });

        let data = await fetch(url);
        let ParsedData = await data.json();
        console.log(ParsedData)
        this.setState({
            articles: ParsedData.articles,
            page: this.state.page - 1,
            loading: false
        });
    };
    handleNxtClick = async () => {
        console.log("next clicked");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${api_key}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;

        this.setState({ loading: true });
        let data = await fetch(url);
        let ParsedData = await data.json();
        this.setState({
            articles: ParsedData.articles,
            page: this.state.page + 1,
            loading: false
        });
    };
    render() {
        var noImgUrl =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEMiDWtfT3tgMfKhM37oJg9vthWl3dkmI8Q&usqp=CAU";
        return (
            <div className="container my-3">
                <h1 className="text-center mb-5">
                    <u>Taaza-Akhbaar - Top Headlines</u>
                </h1>

                {this.state.loading && <Spinner />}
                <div className="row ">

                    {!this.state.loading && this.state.articles.map((element) => {
                        return (
                            <div className="col-md-4 my-3" key={element.url}>
                                <NewsItem
                                    title={
                                        element.title
                                            ? element.title
                                            : "No title available"
                                    }
                                    description={
                                        element.description
                                            ? element.description.slice(0, 100) + "..."
                                            : "No description available"
                                    }
                                    newsUrl={element.url}
                                    imageUrl={element.urlToImage ? element.urlToImage : noImgUrl}
                                    publishedAt={element.publishedAt}
                                    source={element.source.name}
                                    mode={"light"}
                                />
                            </div>
                        );
                    })}
                </div>
                <div className="container d-flex justify-content-between my-5">
                    <button
                        disabled={this.state.page <= 1}
                        className="btn-success btn btn-primary"
                        onClick={this.handlePvsClick}
                    >
                        &larr; Previous
                    </button>
                    <button
                        disabled={this.state.page + 1 > this.state.pageNeed}
                        className="btn-success btn btn-primary"
                        onClick={this.handleNxtClick}
                    >
                        Next &rarr;
                    </button>
                </div>
            </div>
        );
    }
}

export default News;

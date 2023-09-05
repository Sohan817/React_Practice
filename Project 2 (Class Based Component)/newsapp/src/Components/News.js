import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
NewsItem;
export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor() {
    // @ts-ignore
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    //get url
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fcf7501f86ec459bb99f51f6ccb8a492&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    //fetch the api
    let data = await fetch(url);
    //Convert to json
    let parseData = await data.json();
    //pass data to state article
    this.setState({
      articles: parseData.articles,
      totalArticles: parseData.totalResults,
      loading: false,
    });
  }
  handlePreviousClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=fcf7501f86ec459bb99f51f6ccb8a492&page=${
      this.state.page - 1
    } &pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    //fetch the api
    let data = await fetch(url);
    //Convert to json
    let parseData = await data.json();
    console.log(parseData);
    //pass data to state article
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
      loading: false,
    });
  };
  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=fcf7501f86ec459bb99f51f6ccb8a492&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    //fetch the api
    let data = await fetch(url);
    //Convert to json
    let parseData = await data.json();
    console.log(parseData);
    //pass data to state article
    this.setState({
      page: this.state.page + 1,
      articles: parseData.articles,
      loading: false,
    });
  };
  render() {
    return (
      <div className="container my-3" style={{ margin: "35px 0px" }}>
        <h1 className="text-center">NewsMonkey-Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div
                  className="col-md-4"
                  key={
                    // @ts-ignore
                    element.url
                  }
                >
                  <NewsItem
                    // @ts-ignore
                    title={element.title ? element.title : ""}
                    // @ts-ignore
                    description={element.description ? element.description : ""}
                    // @ts-ignore
                    imageUrl={element.urlToImage}
                    // @ts-ignore
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePreviousClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalArticles / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

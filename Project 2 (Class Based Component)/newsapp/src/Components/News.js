import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
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
  capitalizedFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    // @ts-ignore
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalArticles: 0,
    };
    document.title = `NewsMonkey-${this.capitalizedFirst(this.props.category)}`;
  }
  componentDidMount = async () => {
    this.props.setProgress(10);
    //get url
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fcf7501f86ec459bb99f51f6ccb8a492&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    //fetch the api
    let data = await fetch(url);
    this.props.setProgress(30);
    //Convert to json
    let parseData = await data.json();
    this.props.setProgress(70);
    //pass data to state article
    this.setState({
      articles: parseData.articles,
      totalArticles: parseData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  };
  // //Handle previous page
  // handlePreviousClick = async () => {
  //   let url = `https://newsapi.org/v2/top-headlines?country=${
  //     this.props.country
  //   }&category=${
  //     this.props.category
  //   }&apiKey=fcf7501f86ec459bb99f51f6ccb8a492&page=${
  //     this.state.page - 1
  //   } &pageSize=${this.props.pageSize}`;
  //   this.setState({ loading: true });
  //   //fetch the api
  //   let data = await fetch(url);
  //   //Convert to json
  //   let parseData = await data.json();
  //   console.log(parseData);
  //   //pass data to state article
  //   this.setState({
  //     page: this.state.page - 1,
  //     articles: parseData.articles,
  //     loading: false,
  //   });
  // };
  // //Handle next page
  // handleNextClick = async () => {
  //   let url = `https://newsapi.org/v2/top-headlines?country=${
  //     this.props.country
  //   }&category=${
  //     this.props.category
  //   }&apiKey=fcf7501f86ec459bb99f51f6ccb8a492&page=${
  //     this.state.page + 1
  //   }&pageSize=${this.props.pageSize}`;
  //   this.setState({ loading: true });
  //   //fetch the api
  //   let data = await fetch(url);
  //   //Convert to json
  //   let parseData = await data.json();
  //   console.log(parseData);
  //   //pass data to state article
  //   this.setState({
  //     page: this.state.page + 1,
  //     articles: parseData.articles,
  //     loading: false,
  //   });
  // };
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    //get url
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=fcf7501f86ec459bb99f51f6ccb8a492&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    //this.setState({ loading: true });
    //fetch the api
    let data = await fetch(url);
    //Convert to json
    let parseData = await data.json();
    //pass data to state article
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalArticles: parseData.totalResults,
    });
  };
  render() {
    return (
      <>
        <h1 className="text-center">
          NewsMonkey-Top {this.capitalizedFirst(this.props.category)} Headlines
        </h1>
        {this.state.loading && <Spinner />}
        {/* Infinite scroll */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalArticles}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element, index) => {
                return (
                  <div
                    className="col-md-4"
                    key={
                      // @ts-ignore
                      index
                    }
                  >
                    <NewsItem
                      // @ts-ignore
                      title={element.title ? element.title : ""}
                      description={
                        // @ts-ignore
                        element.description ? element.description : ""
                      }
                      // @ts-ignore
                      imageUrl={element.urlToImage}
                      // @ts-ignore
                      newsUrl={element.url}
                      // @ts-ignore
                      author={element.author}
                      // @ts-ignore
                      date={element.publishedAt}
                      // @ts-ignore
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
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
        </div>*/}
      </>
    );
  }
}
